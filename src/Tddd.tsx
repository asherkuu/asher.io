"use client";
import {indexQuery} from "#/src/sanity/queries/project";
import {Project} from "#/src/sanity/types";
import {sanityFetch} from "#/src/util/fetch";
import React, {useEffect, useState} from "react";

const Tddd = () => {
  const [data, setData] = useState<Project[]>([]);
  useEffect(() => {
    console.log(1);
    getData();
  }, []);

  const getData = async () => {
    await sanityFetch({query: indexQuery}).then(result => setData(result));
  };

  return (
    <div className="border border-grey-500 p-4">
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
};

export default Tddd;
