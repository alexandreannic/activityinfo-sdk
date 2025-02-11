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
    const builder = new AiBuilder({
      activityInfoToken: env.ACTIVITY_INFO_API_TOKEN,
      outDir: env.ROOT_DIR + '/output/2024/',
    })
    await builder.generateInterface({
      formId: 'c95ky7klr95z6ia3v',
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
    await builder.generateInterface({
      optionsLimit: 200000,
      formId: 'cz86p3tlqc7h66y2',
      questionSettings: {
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Implementing Partner': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Donor Name': {
          skipChoices: true,
        },
        'Sub-Implementing Partner': {
          skipChoices: true,
        },
        Hromada: {
          skipChoices: true,
        },
        Settlement: {
          skipChoices: true,
        },
      },
    })

    builder.generateInterface({
      formId: 'chxr3zlqc5qatg2',
      questionSettings: {
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Activity and indicator': {
          selectColumnByLabels: ['Activity', 'Sub-activity', 'Indicator', 'Modality'],
        },
        'If yes, which sub-activity': {
          selectColumnByLabels: ['Activity', 'Sub-activity', 'Indicator', 'Modality'],
        },
        'Implementing Partner': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },

        Raion: {skipChoices: true},
        Hromada: {skipChoices: true},
        Settlement: {skipChoices: true},
        'Collective Site': {skipChoices: true},
      },
    })
    await builder.generateInterface({
      formId: 'czd5jf7lqf2zv4r4r',
      questionSettings: {
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Implementing Partner': {
          skipChoices: true,
        },
        'Implementing Partner 2': {
          skipChoices: true,
        },
        Raion: {
          skipChoices: true,
        },
        Hromada: {
          skipChoices: true,
        },
        Settlement: {
          skipChoices: true,
        },
        'Collective Site': {
          skipChoices: true,
        },
      },
    })
    await builder.generateInterface({
      formId: 'c6mrp6dlqv1q7q243w',
      questionSettings: {
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Implementing Partner': {skipChoices: true},
        'Implementing Partner 2': {skipChoices: true},
        Raion: {skipChoices: true},
        Hromada: {skipChoices: true},
        Settlement: {skipChoices: true},
        'Collective Site': {skipChoices: true},
      },
    })

    await builder.generateInterface({
      formId: 'cmnzatklqv1q3s243u',
      questionSettings: {
        'Reporting Organization': {
          filterChoices: _ => _.includes('Danish Refugee Council'),
        },
        'Implementing Partner': {skipChoices: true},
        'Implementing Partner 2': {skipChoices: true},
        OblastIndex: {skipChoices: true},
        Raion: {skipChoices: true},
        Hromada: {skipChoices: true},
        Settlement: {skipChoices: true},
        'Collective Site': {skipChoices: true},
      },
    })
    await builder.generateInterface({
      optionsLimit: 200,
      formId: 'c9vv9j8lqm633lj1tm',
      questionSettings: {
        Donor: {
          skipChoices: true,
        },
        'Implementing Partner': {filterChoices: _ => _.includes('Danish Refugee Council')},
        'Reporting Organization': {filterChoices: _ => _.includes('Danish Refugee Council')},
        Raion: {skipChoices: true},
        Hromada: {skipChoices: true},
        Settlement: {skipChoices: true},
        'Collective Site': {skipChoices: true},
      },
    })
  })
})
