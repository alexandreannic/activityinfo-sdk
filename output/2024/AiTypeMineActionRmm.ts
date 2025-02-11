export namespace AiTypeMineActionRmm {
  type Opt<T extends keyof typeof options> = keyof (typeof options)[T]
  export interface Type {
    ID?: string
    'Reporting Organization': Opt<'Reporting Organization'>
    'Implementing Partner'?: string
    'Implementing Partner 2'?: string
    'Plan/Project Code': Opt<'Plan/Project Code'>
    Oblast: Opt<'Oblast'>
    Raion: string
    Hromada: string
    Settlement?: string
    'Collective Site'?: string
    'Response Theme': Opt<'Response Theme'>
  }

  export const map = (a: Type) => ({
    ['ID']: a['ID'],
    ['Reporting Organization']: a['Reporting Organization'] ? 'czbgrslpwg36j52' + ':' + options['Reporting Organization'][a['Reporting Organization']!] : undefined,
    ['Implementing Partner']: a['Implementing Partner'],
    ['Implementing Partner 2']: a['Implementing Partner 2'],
    ['Plan/Project Code']: a['Plan/Project Code'] ? 'c9c396nlr6f4i48zv' + ':' + options['Plan/Project Code'][a['Plan/Project Code']!] : undefined,
    ['Oblast']: a['Oblast'] ? 'cemuxawlq3kfmqf2' + ':' + options['Oblast'][a['Oblast']!] : undefined,
    ['Raion']: a['Raion'],
    ['Hromada']: a['Hromada'],
    ['Settlement']: a['Settlement'],
    ['Collective Site']: a['Collective Site'],
    ['Response Theme']: a['Response Theme'] ? options['Response Theme'][a['Response Theme']!] : undefined,
  })

  export const options = {
    'Reporting Organization': {'Danish Refugee Council': 'cloyih3lpwhjdsu2r0'},
    'Plan/Project Code': {
      'MA-DRC-00001': 'csduwtmlsn2cadn8',
      'MA-DRC-00002': 'c1ibtnblsnbwirq2',
      'MA-DRC-00003': 'c410zexlsogr3942',
      'MA-DRC-00004': 'ckql3hzlsogumin3',
      'MA-DRC-00005': 'c5h7kj9lsohodvh4',
      'MA-DRC-00006': 'cfr73p4lsohuagv5',
      'MA-DRC-00007': 'cnpgzxlsoi5jhb6',
      'MA-DRC-00008': 'c4dqoqzlsoi8e4m7',
      'MA-DRC-00009': 'cbq4ql1lsojygo38',
      'MA-DRC-00010': 'cvnl97qlsok0t9m9',
      'MA-DRC-00011': 'c4bck8ylssrdvtb2',
      'MA-DRC-00012': 'cxmz8zyly7c04mi2',
      'MA-DRC-00013': 'cytsa31ly7c6dm43',
      'MA-DRC-00014': 'cc4w1sily7c9xva4',
      'MA-DRC-00015': 'c26rv9dly7cdl9g5',
      'MA-DRC-00016': 'cfzu1rnm4b9h8qp4',
      'MA-DRC-00017': 'cd7xp0ym4b9koer5',
      'MA-DRC-00018': 'c8up20vm4bb3y1d6',
    },
    Oblast: {
      'Autonomous Republic of Crimea_Автономна Республіка Крим': 'c5c2sr3lq3kjj6gd',
      Cherkaska_Черкаська: 'clbgltvlq3kjj6he',
      Chernihivska_Чернігівська: 'c7jz1shlq3kjj6hf',
      Chernivetska_Чернівецька: 'c78zq2rlq3kjj6hg',
      Dnipropetrovska_Дніпропетровська: 'c6l0fjylq3kjj6hh',
      Donetska_Донецька: 'c3memjqlq3kjj6hi',
      'Ivano-Frankivska_Івано-Франківська': 'cy93k5lq3kjj6hj',
      Kharkivska_Харківська: 'cbbcx5ylq3kjj6hk',
      Khersonska_Херсонська: 'cq8k2oylq3kjj6hl',
      Khmelnytska_Хмельницька: 'cliunu3lq3kjj6hm',
      Kirovohradska_Кіровоградська: 'cxvw276lq3kjj6hn',
      Kyiv_Київ: 'cwe11jplq3kjj6ho',
      Kyivska_Київська: 'cnp046mlq3kjj6hp',
      Luhanska_Луганська: 'ctu8ahklq3kjj6hq',
      Lvivska_Львівська: 'cmpyidslq3kjj6hr',
      Mykolaivska_Миколаївська: 'ccqvlallq3kjj6hs',
      Odeska_Одеська: 'c2uwqqqlq3kjj6ht',
      Poltavska_Полтавська: 'cwq2uuxlq3kjj6hu',
      Rivnenska_Рівненська: 'c2j0t0flq3kjj6hv',
      Sevastopol_Севастополь: 'cjvbpkplq3kjj6hw',
      Sumska_Сумська: 'cb4nm4xlq3kjj6hx',
      Ternopilska_Тернопільська: 'clrrzfslq3kjj6hy',
      Vinnytska_Вінницька: 'cvx17yllq3kjj6hz',
      Volynska_Волинська: 'cdzklrblq3kjj6h10',
      Zakarpatska_Закарпатська: 'cfqiux5lq3kjj6h11',
      Zaporizka_Запорізька: 'cmqvx7elq3kjj6h12',
      Zhytomyrska_Житомирська: 'c51dllnlq3kjj6h13',
    },
    'Response Theme': {'No specific theme': 'c40c4vklqf3085j55'},
  }

  type Optsub<T extends keyof typeof optionssub> = keyof (typeof optionssub)[T]
  export interface Typesub {
    'Reporting Month': string
    'Population Group': Optsub<'Population Group'>
    Indicators: Optsub<'Indicators'>
    'Total Individuals Reached': number
    'Girls (0-17)': number
    'Boys (0-17)': number
    'Adult Women (18-59)': number
    'Adult Men (18-59)': number
    'Older Women (60+)': number
    'Older Men (60+)': number
    'Non-individuals Reached/Quantity': number
    'People with Disability'?: number
    'HNRP Scope'?: Optsub<'HNRP Scope'>
    'Outside HNRP Scope sub-categories'?: Optsub<'Outside HNRP Scope sub-categories'>
  }

  export const mapsub = (a: Typesub) => ({
    ['Reporting Month']: a['Reporting Month'],
    ['Population Group']: a['Population Group'] ? 'cf8ig2alq6dbe8t2' + ':' + optionssub['Population Group'][a['Population Group']!] : undefined,
    ['Indicators']: a['Indicators'] ? 'c8uhbuclqb1fjlg2' + ':' + optionssub['Indicators'][a['Indicators']!] : undefined,
    ['Total Individuals Reached']: a['Total Individuals Reached'],
    ['Girls (0-17)']: a['Girls (0-17)'],
    ['Boys (0-17)']: a['Boys (0-17)'],
    ['Adult Women (18-59)']: a['Adult Women (18-59)'],
    ['Adult Men (18-59)']: a['Adult Men (18-59)'],
    ['Older Women (60+)']: a['Older Women (60+)'],
    ['Older Men (60+)']: a['Older Men (60+)'],
    ['Non-individuals Reached/Quantity']: a['Non-individuals Reached/Quantity'],
    ['People with Disability']: a['People with Disability'],
    ['HNRP Scope']: a['HNRP Scope'] ? optionssub['HNRP Scope'][a['HNRP Scope']!] : undefined,
    ['Outside HNRP Scope sub-categories']: a['Outside HNRP Scope sub-categories']
      ? 'cs4astklw6ftd2y2' + ':' + optionssub['Outside HNRP Scope sub-categories'][a['Outside HNRP Scope sub-categories']!]
      : undefined,
  })

  export const optionssub = {
    'Population Group': {'Internally Displaced': 'cvw4on6lq6dgcoj5', 'Non-Displaced': 'ck6ulx8lq6dgcok6', Returnees: 'cuz9qi9lq6dgcok7'},
    Indicators: {
      '# of individuals who participated in face-to-face EORE sessions in the educational institutions (e.g. schools)': 'ck8w3wflqmgu66u16',
      '# of organizations (national or local) who received capacity building support to become an accredited EORE operator': 'cau7kexlqmgu66u17',
      '# mine / ERW survivors who received cash assistance (SADD)': 'cihm2xplqmgu66u18',
      '# of mine / ERW survivor who received MHPSS (SADD)': 'cy1jgeilqmgu66u19',
      'Area surveyed (square metres) - (TBD)': 'cmg8547lqmgu66u1a',
      'Area cleared (square metres)': 'ci7ya6zlqmgu66u1b',
      '# of individuals who directly benefitted from land clearance (SADD)': 'cl00iz2lqmgu66u1c',
      '# of interventions (equipment provision) to national mine action institutions': 'clxeupalqmgu66u1d',
      '# of personnel trained on mine action activities (IMAS) related to survey and clearance': 'chks7q9lqmgu66u1e',
      '# of individuals who participated in face-to-face EORE sessions excluding educational institutions (e.g. communities)': 'cepwuk2ls044z522',
    },
    'HNRP Scope': {'Outside HNRP Scope': 'cmkd5v6lw6fmi712'},
    'Outside HNRP Scope sub-categories': {
      'Outside priority areas': 'cvf0ba4lw6fucqv4',
      'Funding not reported in FTS​': 'c7cah40lw6fula95',
      'Delivered outside HNRP​ mechanism': 'cj4y1s3lw6furva6',
      'Not aligned to guidance': 'c8mycj4lw6fv7477',
    },
  }
}
