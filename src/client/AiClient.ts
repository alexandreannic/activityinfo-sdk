import {Ai} from './Ai'
import {Api} from './Api'

export class AiClient {
  constructor(
    token: string,
    private api = new Api(token),
  ) {}

  static readonly generateId = (length = 17) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
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

  readonly getDatabases = () => {
    return this.api.get<Ai.Database[]>(`/resources/databases`)
  }

  readonly getForms = (dbId: string) => {
    return this.api.get<Ai.Form>(`/resources/databases/${dbId}`) //.then(_ => _.resources.map(_ => _.id === dbId))
  }

  readonly getForm = (formId: string): Promise<Ai.FormTree> => {
    return this.api.get(`/resources/form/${formId}/tree/translated`).then(_ => {
      return _.forms
    })
  }

  readonly getColumns = async (
    formId: Ai.Id,
    columnIds: Ai.Id[],
    filter?: string,
  ): Promise<{id: Ai.Id; label: string}[]> => {
    return this.api
      .post(`/resources/query/columns`, {
        body: {
          filter,
          // filter: filter ? `_id == \\"${filter}\\"` : undefined,
          rowSources: [{rootFormId: formId}],
          columns: [{id: 'id', expression: '_id'}, ...columnIds.map((_, i) => ({id: `k${i}`, expression: _}))],
          truncateStrings: false,
        },
      })
      .then(_ => _.columns)
      .then(res => {
        return res.id.values.map((col: any, i: number) => ({
          id: col,
          label: columnIds.map((_, colI) => res[`k${colI}`].values[i]).join(' > '),
        }))
      })
  }

  readonly getColumnsRaw = async (body: any): Promise<Record<Ai.Id, {values: string[]}>> => {
    return this.api.post(`/resources/query/columns`, {body}).then(_ => {
      const {id, value} = _.columns
      const res = (id.values as string[]).reduce((acc, id, i) => {
        // @ts-ignore
        acc[value.values[i]] = id
        return acc
      }, {})
      return res
    })
  }

  readonly submit = (data: Ai.Request.Content[]) => {
    return this.api.postNoJSON(`/resources/update`, {
      body: {
        changes: data,
      },
    })
  }
}
