import Main from "#/src/components/main";
import {indexQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";

const Page = async () => {
  const data = await getData();
  return <Main project={data} />;
};

export default Page;

const getData = async () => {
  return await sanityFetch({query: indexQuery});
};
