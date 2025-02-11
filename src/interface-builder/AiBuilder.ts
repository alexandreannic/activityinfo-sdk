import {AiBuilderSchemParser} from './AiBuilderSchemaParser'
import {AiBuilderFileMaker} from './AiBuilderFileMaker'
import {AiClient, Api} from '../'
import {capitalize, slugify} from '../utils/Utils'

export type AiBuilderFormArgs = {
  optionsLimit?: number
  formId: string
  fileName?: string
  questionSettings: Partial<
    Record<
      string,
      {
        skip?: boolean
        skipChoices?: boolean
        filterChoices?: (label: string) => boolean
        selectColumnByLabels?: string[]
      }
    >
  >
}

export class AiBuilder {
  constructor(
    private props: {
      activityInfoToken: string
      outDir: string
      baseUrl?: string
    },
  ) {}

  readonly generateInterface = async (args: AiBuilderFormArgs) => {
    const sdk = new AiClient(this.props.activityInfoToken, this.props.baseUrl ? new Api(this.props.baseUrl) : undefined)
    const formTree = await sdk.fetchForm(args.formId)
    // TODO: Here we assume there won't be more than 1 nested form, and that's not good :-)
    const [form, subForm] = await new AiBuilderSchemParser(args, formTree, sdk).parse()
    const fileName = args.fileName ?? slugify(formTree[args.formId].schema.label)
    await new AiBuilderFileMaker(fileName, form, subForm).make(this.props.outDir)
  }
}
