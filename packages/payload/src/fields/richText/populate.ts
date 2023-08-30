/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Collection } from '../../collections/config/types.js'
import type { PayloadRequest } from '../../express/types.js'
import type { Field, RichTextField } from '../config/types.js'

type Arguments = {
  currentDepth?: number
  data: unknown
  depth: number
  field: RichTextField
  key: number | string
  overrideAccess?: boolean
  req: PayloadRequest
  showHiddenFields: boolean
}

export const populate = async ({
  collection,
  currentDepth,
  data,
  depth,
  id,
  key,
  overrideAccess,
  req,
  showHiddenFields,
}: Omit<Arguments, 'field'> & {
  collection: Collection
  field: Field
  id: string
}): Promise<void> => {
  const dataRef = data as Record<string, unknown>

  const doc = await req.payloadDataLoader.load(
    JSON.stringify([
      req.transactionID,
      collection.config.slug,
      id,
      depth,
      currentDepth + 1,
      req.locale,
      req.fallbackLocale,
      typeof overrideAccess === 'undefined' ? false : overrideAccess,
      showHiddenFields,
    ]),
  )

  if (doc) {
    dataRef[key] = doc
  } else {
    dataRef[key] = null
  }
}