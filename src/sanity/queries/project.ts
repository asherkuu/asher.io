const projectFields = `
  _id,
  title,
  description,
  projectType,
  workedAt,
  workStartedAt,
  workEndedAt,
  position,
  belong,
  isPublished,
  publishedAt,
  "mainImage":mainImage.asset,
  "slug": slug.current,
  "summaries": summaries[]->
`;

export const indexQuery = `
  *[_type == "project" && isPublished == true] | order(publishedAt desc, _updatedAt desc) {
    ${projectFields} 
  }
`;

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    mainImage,
    ${projectFields}
  }
}`;

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = (slug: string) => `
*[_type == "project" && slug.current == "${slug}"][0] {
  content,
  ${projectFields}
}
`;

export const projectUpdatedQuery = `*[_type == "project" && _id == $id].slug.current`;

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`;

export const allSnippetsQuery = `
*[_type == "snippet"] | order(publishedAt desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = `
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

export const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`;
