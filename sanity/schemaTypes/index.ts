import { type SchemaTypeDefinition } from 'sanity'
import { commentType } from './commentType'
import { postType } from './postType'
import { subredditType } from './subredditType'
import { userType } from './userType'
import { voteType } from './voteType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [commentType, postType, subredditType, userType, voteType],
}
