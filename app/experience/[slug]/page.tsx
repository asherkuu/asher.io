import GusetbookBySlug from "#/src/components/guestbook/[slug]";
import {getClient} from "#/src/sanity/sanity-server";
import {projectQuery} from "#/src/sanity/queries/project";
import {type PageProps} from "#/src/types";
import {mdxToHtml} from "#/lib/mdx";

const Page = async ({params}: PageProps) => {
  const slug = params?.slug;
  const {html, readingTime} = await getData({slug});

  return <GusetbookBySlug slug={slug} html={html} />;
};

const getData = async ({slug, preview = false}: any) => {
  const {project} = await getClient(preview).fetch(projectQuery, {
    slug,
  });

  if (!project) {
    return {notFound: true};
  }

  const {html, readingTime} = await mdxToHtml(project.content);
  // const tweets = await getTweets(tweetIDs);

  return {html, readingTime};
};

export default Page;
