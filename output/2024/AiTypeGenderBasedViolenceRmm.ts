export namespace AiTypeGenderBasedViolenceRmm {
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
    ['Plan/Project Code']: a['Plan/Project Code'] ? 'cqfsgcblr6f4hbpzu' + ':' + options['Plan/Project Code'][a['Plan/Project Code']!] : undefined,
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
      'GBV-DRC-00001': 'c10nfqbls2wqyvg2',
      'GBV-DRC-00002': 'co0svlsls2x3ndr3',
      'GBV-DRC-00003': 'cftn5bgls2xbfl14',
      'GBV-DRC-00004': 'cqr8n0hls2xh58h5',
      'GBV-DRC-00005': 'c3xqrqfls2xll546',
      'GBV-DRC-00006': 'cujyq82lx8vzpq17',
      'GBV-DRC-00007': 'cd2wcsflx8w67gb8',
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
    'Type of beneficiaries'?: Optsub<'Type of beneficiaries'>
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
    'Basic/Essential': number
    Elderly: number
    Winter: number
    Other: number
    'Type of distribution': Optsub<'Type of distribution'>
    'Who distributed the kits?': Optsub<'Who distributed the kits?'>
    'Dignity kits in stock?': Optsub<'Dignity kits in stock?'>
    'Basic/Essential': number
    Elderly: number
    Winter: number
    'Other kits in stock': number
    'Current status of stock': Optsub<'Current status of stock'>
    'Any assessment/feedback done/collected on post distribution of kits?': Optsub<'Any assessment/feedback done/collected on post distribution of kits?'>
    'Was the service provided to evacuees?'?: Optsub<'Was the service provided to evacuees?'>
    'How many evacuees received the service?'?: number
    'HNRP Scope'?: Optsub<'HNRP Scope'>
    'Outside HNRP Scope sub-categories'?: Optsub<'Outside HNRP Scope sub-categories'>
  }

  export const mapsub = (a: Typesub) => ({
    ['Reporting Month']: a['Reporting Month'],
    ['Population Group']: a['Population Group'] ? 'cf8ig2alq6dbe8t2' + ':' + optionssub['Population Group'][a['Population Group']!] : undefined,
    ['Type of beneficiaries']: a['Type of beneficiaries'] ? optionssub['Type of beneficiaries'][a['Type of beneficiaries']!] : undefined,
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
    ['Basic/Essential']: a['Basic/Essential'],
    ['Elderly']: a['Elderly'],
    ['Winter']: a['Winter'],
    ['Other']: a['Other'],
    ['Type of distribution']: a['Type of distribution'] ? optionssub['Type of distribution'][a['Type of distribution']!] : undefined,
    ['Who distributed the kits?']: a['Who distributed the kits?'] ? optionssub['Who distributed the kits?'][a['Who distributed the kits?']!] : undefined,
    ['Dignity kits in stock?']: a['Dignity kits in stock?'] ? optionssub['Dignity kits in stock?'][a['Dignity kits in stock?']!] : undefined,
    ['Basic/Essential']: a['Basic/Essential'],
    ['Elderly']: a['Elderly'],
    ['Winter']: a['Winter'],
    ['Other kits in stock']: a['Other kits in stock'],
    ['Current status of stock']: a['Current status of stock'] ? optionssub['Current status of stock'][a['Current status of stock']!] : undefined,
    ['Any assessment/feedback done/collected on post distribution of kits?']: a['Any assessment/feedback done/collected on post distribution of kits?']
      ? optionssub['Any assessment/feedback done/collected on post distribution of kits?'][a['Any assessment/feedback done/collected on post distribution of kits?']!]
      : undefined,
    ['Was the service provided to evacuees?']: a['Was the service provided to evacuees?']
      ? optionssub['Was the service provided to evacuees?'][a['Was the service provided to evacuees?']!]
      : undefined,
    ['How many evacuees received the service?']: a['How many evacuees received the service?'],
    ['HNRP Scope']: a['HNRP Scope'] ? optionssub['HNRP Scope'][a['HNRP Scope']!] : undefined,
    ['Outside HNRP Scope sub-categories']: a['Outside HNRP Scope sub-categories']
      ? 'cs4astklw6ftd2y2' + ':' + optionssub['Outside HNRP Scope sub-categories'][a['Outside HNRP Scope sub-categories']!]
      : undefined,
  })

  export const optionssub = {
    'Population Group': {'Internally Displaced': 'cvw4on6lq6dgcoj5', 'Non-Displaced': 'ck6ulx8lq6dgcok6', Returnees: 'cuz9qi9lq6dgcok7'},
    'Type of beneficiaries': {'New beneficiaries': 'clxysqflslppffd5', 'Repeated beneficiaries': 'cv19gg2lslpptjy7'},
    Indicators: {
      '# of individuals supported with GBV case management that meet GBViE minimum standards': 'c296s26lqmgu66ul',
      '# of individuals provided with specialized individual or group GBV psychosocial support that meet GBViE standards (not including recreational activities)': 'c5q9o3xlqmgu66um',
      '# of GBV hotlines operational': 'c6rdt1clqmgu66un',
      '# of individuals who received services in GBV crisis rooms': 'citub83lqmgu66uo',
      '# of operational GBV crisis rooms': 'c2d0f3ulqmgu66up',
      '# of individuals who received services in GBV day care centers': 'cjeproolqmgu66uq',
      '# of operational GBV day care center': 'cm844hglqmgu66ur',
      '# of individuals who received services in shelters': 'c72si1ylqmgu66us',
      '# of operational GBV shelters': 'cv5v0z7lqmgu66ut',
      '# of women and girls who received recreational and livelihood skills including vocational education sessions in women and girls safe spaces': 'c5x9amllqmgu66uu',
      "# of operational women and girls' safe spaces": 'cagbueslqmgu66uv',
      '# of individuals at risk supported with GBV specialized legal assistance and counseling': 'c6g3oerlqmgu66uw',
      '# of individuals reached with humanitarian cash and voucher assistance for GBV case management and/or other GBV response': 'cn8myhdlqmgu66ux',
      '# of women and girls at risk who received dignity kits': 'chyifk6lqmgu66uy',
      '# of individuals reached with awareness-raising activities and GBV-life-saving information': 'cvauilxlqmgu66uz',
      '# of GBV awareness campaigns through social media, websites, TV and radio': 'ctrecbblqmgu66u10',
      '# of non-GBV service providers trained on GBV prevention, risk mitigation and referrals that meet GBViE minimum standards': 'c8wzmoylqmgu66u11',
      '# of GBV assessments conducted': 'cdycodllqmgu66u12',
      '# of GBV safety audits conducted in collective sites and selected public areas': 'cduyu4slqmgu66u13',
      '# of GBV service providers trained on GBV prevention and response that meet GBViE minimum standards': 'c5zjdi5lqmgu66u14',
      '# of GBV advocacy interventions undertaken with decision-makers and communities': 'c3ufluolqmgu66u15',
    },
    'Type of distribution': {'Via convoys': 'csct9jvlz6vk00d2', 'Through static centers': 'cenbkqlz6vlilq4', 'Through mobile teams or door-to-door': 'cw0jeaclz6vluuk5'},
    'Who distributed the kits?': {
      'Employees/staff/volunteers of the reporting organization': 'crm2lwdlz6voilh6',
      'Employees/staff/volunteers of the implementing organization': 'cspb9mblz6vpwbb8',
      'Community volunteers': 'ck9eujklz6vqqik9',
      'Local authority': 'crbln39lz6vqw1ca',
    },
    'Dignity kits in stock?': {Yes: 'c9z4jlglz9rrvop2', No: 'c10f080lz9rteeo4'},
    'Current status of stock': {
      Procured: 'cnvgyiolz9s9v7ce',
      'Outside of country': 'c9n9kmhlz9scej7g',
      'Currently in transit to Ukraine': 'c5l0hsolz9scn45h',
      'In location in Ukraine': 'cciatn6lz9sczv5i',
    },
    'Any assessment/feedback done/collected on post distribution of kits?': {
      'No assessments planned/done': 'cbw8wg8lz9sg86uj',
      'An assessment is planned or ongoing': 'ceijherlz9sjt21l',
      'Assessment completed – report currently being drafted/finalized': 'cfa27folz9sk1olm',
      'Assessment completed – report is ready (please share with GBV AoR team)': 'cwy2y3wlz9sk7hzn',
    },
    'Was the service provided to evacuees?': {Yes: 'cuieqxklt6ysqm62', No: 'cw6e6s4lt6z214r4'},
    'HNRP Scope': {'Outside HNRP Scope': 'c8fdrbqlw6fmedx2'},
    'Outside HNRP Scope sub-categories': {
      'Outside priority areas': 'cvf0ba4lw6fucqv4',
      'Funding not reported in FTS​': 'c7cah40lw6fula95',
      'Delivered outside HNRP​ mechanism': 'cj4y1s3lw6furva6',
      'Not aligned to guidance': 'c8mycj4lw6fv7477',
    },
  }
}
