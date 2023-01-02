import GusetbookBySlug from "#/src/components/guestbook/[slug]";
import {type PageProps} from "#/src/types";

const Page = async ({params}: PageProps) => {
  const slug = params?.slug;

  return <GusetbookBySlug slug={slug} />;
};

export default Page;
