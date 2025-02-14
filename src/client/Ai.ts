export namespace Ai {
  export type Id = string

  export type Form = {
    resources: {
      id: Id
      parentId: Id
      label: string
      type: 'FORM'
      visibility: 'PRIVATE'
    }[]
  }

  export type FormTree = Record<Id, FormSchema>

  export type FormSchema = {
    id: Id
    permissions: {
      viewFilter?: string
    }
    schema: {
      elements: FormElement[]
      databaseId: Id
      id: Id
      label: string
      code: string
      schemaVersion: number
    }
  }

  export type FormElementType =
    | 'subform'
    | 'reference'
    | 'enumerated'
    | 'calculated'
    | 'quantity'
    | 'FREE_TEXT'
    | 'month'
    | string

  export type FormElement = {
    id: Id
    code: string
    label: string
    description: string
    key?: boolean
    relevanceCondition: string
    validationCondition: string
    required: boolean
    type: FormElementType
    typeParameters?: {
      formId?: Id
      cardinality?: 'single'
      range?: [{formId: Id}]
      values?: {id: string; label: string}[]
      // formula?: string
    }
  }

  export type Database = {
    databaseId: string
    label: string
    description: string
    ownerId: string
  }

  export type Request = Request.T
  export namespace Request {
    export type Activity = Record<string, any>

    export type T = {
      changes: Content[]
    }

    export type Content = {
      formId: Id
      recordId: Id
      parentRecordId: Id | null
      fields: Activity
    }
  }
}
