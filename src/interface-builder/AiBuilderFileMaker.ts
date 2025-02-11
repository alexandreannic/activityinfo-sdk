import {fnSwitch} from '@alexandreannic/ts-utils'
import * as fs from 'node:fs'
import * as prettier from 'prettier'
import {AiParsedSchema} from './AiBuilderSchemaParser'

export class AiBuilderFileMaker {
  constructor(
    private name: string,
    private parsedForm: AiParsedSchema[],
    private parsedSubForm?: AiParsedSchema[],
  ) {}

  private readonly formatCode = async (textContent: string): Promise<string> => {
    return await prettier.format(textContent, {
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 200,
      tabWidth: 2,
      semi: false,
      arrowParens: 'avoid',
      proseWrap: 'preserve',
      bracketSpacing: false,
      parser: 'typescript',
    })
  }

  readonly make = async (outDir: string) => {
    const filePath = outDir + '/AiType' + this.name + '.ts'
    console.log(`Generate into ${filePath}`)

    const textContent = [
      `export namespace AiType${this.name} {`,
      this.makeInterface(this.parsedForm),
      this.makeMappingFunction(this.parsedForm),
      this.makeChoices(this.parsedForm),
      ...(this.parsedSubForm && this.parsedSubForm.length > 0
        ? [
            this.makeInterface(this.parsedSubForm, 'sub'),
            this.makeMappingFunction(this.parsedSubForm, 'sub'),
            this.makeChoices(this.parsedSubForm, 'sub'),
          ]
        : []),
      '}',
    ].join('\n\n')

    fs.mkdirSync(outDir, {recursive: true})
    try {
      fs.writeFileSync(filePath, await this.formatCode(textContent))
    } catch (e) {
      console.log(`${this.name} contains error.`)
      fs.writeFileSync(filePath, textContent)
    }
  }

  readonly makeChoices = (d: AiParsedSchema[], name = '') => {
    return [
      `export const options${name} = {`,
      d
        .filter(_ => !!_.options)
        .map(q => `'${q.label}': { ${q.options?.map(o => `"${o.label}": '${o.id}'`).join(',\n    ')}}`)
        .join(',\n'),
      '}',
    ].join('\n')
  }

  readonly makeMappingFunction = (d: AiParsedSchema[], name = '') => {
    return [
      `export const map${name} = (a: Type${name}) => ({`,
      d
        .map(q => {
          const mapValue = fnSwitch(
            q.type,
            {
              enumerated: () => `a['${q.label}'] ? options${name}['${q.label}'][a['${q.label}']!] : undefined`,
              reference: () =>
                `a['${q.label}'] ? '${q.optionsId}' + ':' + options${name}['${q.label}'][a['${q.label}']!] : undefined`,
            },
            _ => `a['${q.label}']`,
          )
          return `['${q.label}']: ${mapValue}`
        })
        .join(',\n'),
      '})',
    ].join('\n')
  }

  readonly makeInterface = (d: AiParsedSchema[], name = '') => {
    return [
      `type Opt${name}<T extends keyof typeof options${name}> = keyof (typeof options${name})[T]`,
      `export interface Type${name}`,
      '{',
      d.flatMap(q => [`'${q.label}'${q.required ? '' : '?'}: ${this.getType(q, name)}`]).join('\n'),
      '}',
    ].join('\n')
  }

  private getType(q: AiParsedSchema, name: string): string {
    return fnSwitch(
      q.type,
      {
        reference: `Opt${name}<'${q.label}'>`,
        enumerated: `Opt${name}<'${q.label}'>`,
        quantity: 'number',
      },
      _ => 'string',
    )
  }
}
