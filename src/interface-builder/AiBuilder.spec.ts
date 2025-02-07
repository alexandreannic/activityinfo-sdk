import {describe, it} from 'node:test'
import {AiBuilder} from './AiBuilder'
import * as dotenv from 'dotenv'
import {z} from 'zod'

dotenv.config()

const envSchema = z.object({
  ACTIVITY_INFO_API_TOKEN: z.string(),
  ROOT_DIR: z.string(),
})
const env = envSchema.parse(process.env)

describe('AiBuilder', () => {
  it('Run', async () => {
    await new AiBuilder({
      activityInfoToken: env.ACTIVITY_INFO_API_TOKEN,
      outDir: env.ROOT_DIR + '/output',
    }).generateInterface({
      formId: 'c95ky7klr95z6ia3v',
      interfaceName: 'SNFI',
      optionsLimit: 200,
      questionSettings: {
        Oblast: {},
        Raion: {skipChoices: true},
        Hromada: {skipChoices: true},
        Settlement: {skipChoices: true},
        'Collective Site': {skipChoices: true},
        'Indicators - SNFI': {
          selectColumnByLabels: ['Activity_label', 'Indicator_label', 'Modality', 'Theme'],
        },
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Implementing Partner': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
      },
    })
  })
})
