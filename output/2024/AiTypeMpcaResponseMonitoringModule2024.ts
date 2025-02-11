export namespace AiTypeMpcaResponseMonitoringModule2024 {
  type Opt<T extends keyof typeof options> = keyof (typeof options)[T]
  export interface Type {
    'Reporting Organization': Opt<'Reporting Organization'>
    'Implementing Partner': Opt<'Implementing Partner'>
    'Activity Plan Code': Opt<'Activity Plan Code'>
    Donor: string
    'Indicators - MPCA'?: Opt<'Indicators - MPCA'>
    'Total amount (USD) distributed through multi-purpose cash assistance': number
    'Payments Frequency': Opt<'Payments Frequency'>
    'Targeting Framework': Opt<'Targeting Framework'>
    'Financial Service Provider (FSP)': Opt<'Financial Service Provider (FSP)'>
    'Response Theme': Opt<'Response Theme'>
    Raion?: string
    Hromada: string
    Settlement?: string
    'Collective Site'?: string
    'Reporting Month': string
    'Activity Start Month'?: string
    'Activity End Month'?: string
    'Number of Covered Months': Opt<'Number of Covered Months'>
    'Population Group': Opt<'Population Group'>
    'Total Individuals Reached': number
    'Girls (0-17)': number
    'Boys (0-17)': number
    'Adult Women (18-59)': number
    'Adult Men (18-59)': number
    'Older Women (60+)': number
    'Older Men (60+)': number
    'People with disability': number
    'Girls with disability (0-17)'?: number
    'Boys with disability (0-17)'?: number
    'Adult Women with disability (18-59)'?: number
    'Adult Men with disability (18-59)'?: number
    'Older Women with disability (60+)'?: number
    'Older Men with disability (60+)'?: number
    'HNRP Scope'?: Opt<'HNRP Scope'>
    'Outside HNRP Scope sub-categories'?: Opt<'Outside HNRP Scope sub-categories'>
  }

  export const map = (a: Type) => ({
    ['Reporting Organization']: a['Reporting Organization'] ? 'czbgrslpwg36j52' + ':' + options['Reporting Organization'][a['Reporting Organization']!] : undefined,
    ['Implementing Partner']: a['Implementing Partner'] ? 'czbgrslpwg36j52' + ':' + options['Implementing Partner'][a['Implementing Partner']!] : undefined,
    ['Activity Plan Code']: a['Activity Plan Code'] ? 'c80149tlqm62xpv1tk' + ':' + options['Activity Plan Code'][a['Activity Plan Code']!] : undefined,
    ['Donor']: a['Donor'],
    ['Indicators - MPCA']: a['Indicators - MPCA'] ? 'cid2wxslqb3pzob9e' + ':' + options['Indicators - MPCA'][a['Indicators - MPCA']!] : undefined,
    ['Total amount (USD) distributed through multi-purpose cash assistance']: a['Total amount (USD) distributed through multi-purpose cash assistance'],
    ['Payments Frequency']: a['Payments Frequency'] ? options['Payments Frequency'][a['Payments Frequency']!] : undefined,
    ['Targeting Framework']: a['Targeting Framework'] ? options['Targeting Framework'][a['Targeting Framework']!] : undefined,
    ['Financial Service Provider (FSP)']: a['Financial Service Provider (FSP)'] ? options['Financial Service Provider (FSP)'][a['Financial Service Provider (FSP)']!] : undefined,
    ['Response Theme']: a['Response Theme'] ? options['Response Theme'][a['Response Theme']!] : undefined,
    ['Raion']: a['Raion'],
    ['Hromada']: a['Hromada'],
    ['Settlement']: a['Settlement'],
    ['Collective Site']: a['Collective Site'],
    ['Reporting Month']: a['Reporting Month'],
    ['Activity Start Month']: a['Activity Start Month'],
    ['Activity End Month']: a['Activity End Month'],
    ['Number of Covered Months']: a['Number of Covered Months'] ? options['Number of Covered Months'][a['Number of Covered Months']!] : undefined,
    ['Population Group']: a['Population Group'] ? 'cf8ig2alq6dbe8t2' + ':' + options['Population Group'][a['Population Group']!] : undefined,
    ['Total Individuals Reached']: a['Total Individuals Reached'],
    ['Girls (0-17)']: a['Girls (0-17)'],
    ['Boys (0-17)']: a['Boys (0-17)'],
    ['Adult Women (18-59)']: a['Adult Women (18-59)'],
    ['Adult Men (18-59)']: a['Adult Men (18-59)'],
    ['Older Women (60+)']: a['Older Women (60+)'],
    ['Older Men (60+)']: a['Older Men (60+)'],
    ['People with disability']: a['People with disability'],
    ['Girls with disability (0-17)']: a['Girls with disability (0-17)'],
    ['Boys with disability (0-17)']: a['Boys with disability (0-17)'],
    ['Adult Women with disability (18-59)']: a['Adult Women with disability (18-59)'],
    ['Adult Men with disability (18-59)']: a['Adult Men with disability (18-59)'],
    ['Older Women with disability (60+)']: a['Older Women with disability (60+)'],
    ['Older Men with disability (60+)']: a['Older Men with disability (60+)'],
    ['HNRP Scope']: a['HNRP Scope'] ? options['HNRP Scope'][a['HNRP Scope']!] : undefined,
    ['Outside HNRP Scope sub-categories']: a['Outside HNRP Scope sub-categories']
      ? 'cs4astklw6ftd2y2' + ':' + options['Outside HNRP Scope sub-categories'][a['Outside HNRP Scope sub-categories']!]
      : undefined,
  })

  export const options = {
    'Reporting Organization': {'Danish Refugee Council': 'cloyih3lpwhjdsu2r0'},
    'Implementing Partner': {'Danish Refugee Council': 'cloyih3lpwhjdsu2r0'},
    'Activity Plan Code': {
      'MPCA-DRC-00001': 'cghgcrlltn5k1wn2',
      'MPCA-DRC-00002': 'cf1o4x9ltn5mws75',
      'MPCA-DRC-00003': 'cin9hupltn5o8y68',
      'MPCA-DRC-00004': 'clpzjvyltn5ow78a',
      'MPCA-DRC-00005': 'ccyfia1luwf5qys3',
      'MPCA-DRC-00006': 'cmfd695luwfodg67',
      'MPCA-DRC-00007': 'cj53fxfluwfvu265i',
      'MPCA-DRC-00008': 'cx68b6hlvz4sptv14y',
      'MPCA-DRC-00009': 'cz6ahurlw0lz2g52',
      'MPCA-DRC-00010': 'ch81mymlw0o1el93',
      'MPCA-DRC-00011': 'cu5abj0m0w38bc52',
      'MPCA-DRC-00012': 'c4jpb7xm38tx8su2',
      'MPCA-DRC-00013': 'ck959bmm4inykm0a',
    },
    'Indicators - MPCA': {
      '# of individuals assisted with multi-purpose cash assistance': 'cyj5n1elqb3qh9ba5',
      '# amount (USD) distributed through multi-purpose cash assistance': 'c7vtwjhlqb3qh9ba6',
      '% of households who report being able to meet their basic needs as they define and prioritize them': 'cd0hscblqb3qh9ba7',
      '% of recipients (disaggregated by sex, age, and disability) reporting that humanitarian assistance is delivered in a safe manner': 'c92m9uflqb3qh9ba8',
      '% of recipients (disaggregated by sex, age, and disability) reporting that humanitarian assistance is delivered in an accessible manner': 'czn5galqb3qh9ba9',
      '% of essential needs covered per sector': 'c64d3uwlqb3qh9baa',
      '% of recipients (disaggregated by sex, age, and disability) reporting that humanitarian assistance is delivered in a timely manner': 'c5at5eelqb3qh9bab',
    },
    'Payments Frequency': {'One-off': 'c22oxp8lqntdpktc', 'Multiple payments': 'cigkge6lqnteihce'},
    'Targeting Framework': {'Regular Targeting': 'cewjd3vlu6qi1jq5', 'Rapid Targeting': 'cfi4u8rlu6qm2j67', Unknown: 'ce3ihfulu6qm5qe8'},
    'Financial Service Provider (FSP)': {
      'Bank Transfer': 'crpccsqlr0f2x6wc',
      'Digital Wallets': 'cqsen3tlsljp7rz8',
      MoneyGram: 'cqfsd11lr0f5bzgf',
      'Private Post Office': 'ckvdcjxlr0f5vavh',
      'Ukrposhta (delivery)': 'c83wejdlsljok6h7',
      'Ukrposhta (pick up)': 'c56c4rhlr0f5hrkg',
      'Western Union': 'ca6qhyclr0f569te',
    },
    'Response Theme': {'No specific theme': 'clx2juzlqnt87pe2'},
    'Number of Covered Months': {
      'One month': 'czbonyjlqntauao5',
      'Two months': 'cokxxzhlqntc71k7',
      'Three months (recommended)': 'c6s6jv3lqntc9ua8',
      'Four months': 'cab6to9lqntckcz9',
      'Five months': 'ctsl3i3lqntco52a',
      'Six months': 'cwqi52ylqntcx15b',
    },
    'Population Group': {'Internally Displaced': 'cvw4on6lq6dgcoj5', 'Non-Displaced': 'ck6ulx8lq6dgcok6', Returnees: 'cuz9qi9lq6dgcok7'},
    'HNRP Scope': {'Outside HNRP Scope': 'c5xynzmlw6flq1u2'},
    'Outside HNRP Scope sub-categories': {
      'Outside priority areas': 'cvf0ba4lw6fucqv4',
      'Funding not reported in FTS​': 'c7cah40lw6fula95',
      'Delivered outside HNRP​ mechanism': 'cj4y1s3lw6furva6',
      'Not aligned to guidance': 'c8mycj4lw6fv7477',
    },
  }
}
