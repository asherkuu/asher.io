import dayjs from "dayjs";
import DefaultTags from "#/src/components/Tag/DefaultTags";
import {getClient} from "#/src/sanity/sanity-server";
import {projectQuery} from "#/src/sanity/queries/project";
import {mdxToHtml} from "#/lib/mdx";
import {urlForImage} from "#/src/sanity/sanity";

type HeadProps = {
  params: {
    slug: string;
  };
};

const Head = async ({params: {slug}}: HeadProps) => {
  const data = await getData({slug});

  return (
    <>
      <DefaultTags
        customMeta={{
          title: data?.title,
          description: data?.description,
          ...(data?.mainImage && {image: urlForImage(data?.mainImage).url()}),
          date: dayjs(data?.publishedAt).format("DD/MM/YYYY"),
        }}
      />
      <title>Asher.io</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
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
  project.html = html;
  project.readingTime = readingTime;
  return project;
};

export default Head;
