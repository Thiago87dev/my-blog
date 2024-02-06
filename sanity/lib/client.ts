import { createClient } from 'next-sanity'
import  ImageUrlBuilder  from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}