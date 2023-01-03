import Experience from "#/src/components/experience";
import {indexQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";

const Page = async () => {
  const data = await getData();
  return <Experience data={data} />;
};

export default Page;

const getData = async () => {
  return await sanityFetch({query: indexQuery});
};
