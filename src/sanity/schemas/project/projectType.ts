import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectType',
  title: 'Project Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
