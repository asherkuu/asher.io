import Bio from "#/src/components/main/Bio";

import {Project} from "#/src/sanity/types";
import {getClient} from "#/src/sanity/sanity-server";
import {indexQuery} from "#/src/sanity/queries/project";

export default async function Page() {
  const data = await getData();
  console.log("🚀 ~ file: page.tsx:7 ~ Page ~ data", data);

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      {/* <Bio /> */}
      {data?.map(post => (
        <div key={post._id} className="text-xl font-medium text-gray-500">
          <p>{post.title}</p>
          <div>
            {post.summaries.map(summary => (
              <div key={summary._id}>{summary.title}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const getData = async (): Promise<Project[]> => {
  return await getClient(false).fetch(indexQuery);
};
