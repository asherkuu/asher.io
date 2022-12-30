import {type PageProps} from "#/src/types";

const Page = async ({params}: PageProps) => {
  const slug = params.slug;
  return <p>{slug}</p>;
};

export default Page;
