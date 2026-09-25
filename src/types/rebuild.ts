export type RebuildStatus = 'in-progress' | 'completed'

export type Rebuild = {
  id: string
  slug: string
  make: string
  model: string
  year: number
  status: RebuildStatus
  summary: string
}