import {AiBuilderSchemParser} from './AiBuilderSchemaParser'
import {AiBuilderFileMaker} from './AiBuilderFileMaker'
import {AiClient, Api} from '../'

export type AiBuilderFormArgs = {
  optionsLimit?: number
  formId: string
  interfaceName: string
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
    const outDir = this.props.outDir + '/src/output/activityInfo'
    await new AiBuilderFileMaker(args.interfaceName, form, subForm).make(outDir)
  }
}
