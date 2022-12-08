export interface Item {
    name: string
    cost?: number
    tags: string[]
    skills?: { name: string; description: string }[]
    stats?: { [key: string]: number }
    components?: string[]
  }