export type Tags = string[]

export type Title = string

export interface Meta {
  tags: Tags
  title: Title
}

export interface Article {
  title: Title
  date: string
}
