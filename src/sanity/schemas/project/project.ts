import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'reference',
      to: {type: 'projectType'},
    }),
    defineField({
      name: 'workedAt',
      title: 'Worked at',
      type: 'string',
    }),
    defineField({
      name: 'workStartedAt',
      title: 'Work Started at',
      type: 'datetime',
    }),
    defineField({
      name: 'workEndedAt',
      title: 'Work Ended at',
      type: 'datetime',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'isPublished',
      title: 'Publish',
      type: 'boolean',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'summaries',
      title: 'Summaries',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectSummaries'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description',
      author: 'author.name',
      projectType: 'projectType.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
