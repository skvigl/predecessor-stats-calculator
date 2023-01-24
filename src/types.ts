export interface IItem {
  name: string
  cost?: number
  tags: string[]
  abilities?: IAbility[]
  stats?: IParam
  components?: string[]
}

export interface IAbility {
  name: string
  description: string
}

export interface IParam {
  [name: string]: number
}

export type TParam = [string, number]
