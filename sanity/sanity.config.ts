import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID or VITE_SANITY_PROJECT_ID environment variable')
}

export default defineConfig({
  name: 'default',
  title: 'Travel Sapien Studio',

  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})