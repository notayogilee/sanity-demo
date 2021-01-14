import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "89arskly",
  dataset: "production",
  useCdn: true
})