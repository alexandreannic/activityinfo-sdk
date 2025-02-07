import {Ai} from './Ai'
import {Api} from './Api'

export class AiClient {
  constructor(
    token: string,
    private api = new Api(token),
  ) {}

  static readonly buildRequest = ({
    activityIdPrefix,
    activity,
    activityIndex,
    formId,
  }: {
    activityIdPrefix: string
    activity: any
    activityIndex: number
    formId: string
  }) => {
    return {
      changes: [
        {
          formId: formId,
          recordId: activityIdPrefix + ('' + activityIndex).padStart(3, '0'),
          parentRecordId: null,
          fields: activity,
        },
      ],
    }
  }

  readonly restore = (formId: string, recordId: string) => {
    return this.api.postNoJSON(`/resources/update`, {
      body: {
        changes: [
          {
            formId,
            recordId,
            deleted: false,
          },
        ],
      },
    })
  }

  readonly softDeleteRecord = async (formId: string, recordId: string) => {
    await this.api.postNoJSON(`/resources/update`, {
      body: {
        changes: [
          {
            formId,
            recordId,
            deleted: true,
          },
        ],
      },
    })
  }

  readonly fetchDatabases = () => {
    return this.api.get<Ai.Database[]>(`/resources/databases`)
  }

  readonly fetchForms = (dbId: string) => {
    return this.api.get<Ai.Form>(`/resources/databases/${dbId}`) //.then(_ => _.resources.map(_ => _.id === dbId))
  }

  readonly fetchForm = (formId: string): Promise<Ai.FormTree> => {
    return this.api.get(`/resources/form/${formId}/tree/translated`).then(_ => {
      return _.forms
    })
  }

  readonly fetchColumns = async (
    formId: Ai.Id,
    optionDefId: Ai.Id[],
    filter?: string,
  ): Promise<{id: Ai.Id; label: string}[]> => {
    return this.api
      .post(`/resources/query/columns`, {
        body: {
          filter,
          // filter: filter ? `_id == \\"${filter}\\"` : undefined,
          rowSources: [{rootFormId: formId}],
          columns: [{id: 'id', expression: '_id'}, ...optionDefId.map((_, i) => ({id: `k${i}`, expression: _}))],
          truncateStrings: false,
        },
      })
      .then(_ => _.columns)
      .then(res => {
        return res.id.values.map((col: any, i: number) => ({
          id: col,
          label: optionDefId.map((_, colI) => res[`k${colI}`].values[i]).join(' > '),
        }))
      })
  }

  readonly fetchColumnsFree = async (body: any): Promise<Record<Ai.Id, {values: string[]}>> => {
    return this.api
      .post(`/resources/query/columns`, {body}) //.then(_ => _.columns)
      .then(_ => {
        const {id, value} = _.columns
        const res = (id.values as string[]).reduce((acc, id, i) => {
          // @ts-ignore
          acc[value.values[i]] = id
          return acc
        }, {})
        return res
      })
  }

  readonly fetchColumnsDemoFslc = async () => {
    return this.fetchColumnsFree({
      rowSources: [{rootFormId: 'cvseljqlqb3ntvj7j'}],
      columns: [
        {id: '_id', expression: '_id'},
        {
          id: 'Activity',
          expression: 'cdu30d0lqb3o3gm7u',
        },
        {
          id: 'Subactivity',
          expression: 'cxgts7wls342mqv2',
        },
        {id: 'Indicator', expression: 'c8qwc6llqb3o3gm7v'},
      ],
      truncateStrings: false,
      tags: ['data-entry-ref', 'key-matrix'],
    })
      .then(_ => {
        return _._id.values.reduce(
          (acc, id, i) => {
            if (!acc[_.Activity.values[i]]) acc[_.Activity.values[i]] = {}
            if (!acc[_.Activity.values[i]][_.Subactivity.values[i]])
              acc[_.Activity.values[i]][_.Subactivity.values[i]] = {}
            if (!acc[_.Activity.values[i]][_.Subactivity.values[i]][_.Indicator.values[i]])
              acc[_.Activity.values[i]][_.Subactivity.values[i]][_.Indicator.values[i]] = {}
            acc[_.Activity.values[i]][_.Subactivity.values[i]][_.Indicator.values[i]] = id
            return acc
          },
          {} as Record<string, any>,
        )
      })
      .then(console.log)
  }

  readonly publish = (params: any) => {
    return this.api.postNoJSON(`/resources/update`, {
      body: params,
    })
  }
}
