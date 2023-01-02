import ExperienceDetail from "#/src/components/experience/[slug]";
import {type PageProps} from "#/src/types";

const Page = async ({params}: PageProps) => {
  const slug = params?.slug;

  return <ExperienceDetail slug={slug} />;
};

export default Page;
