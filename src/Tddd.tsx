"use client";
import {indexQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";
import React, {useEffect} from "react";

const Tddd = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await sanityFetch({query: indexQuery});
  };
  return <div>Tddd</div>;
};

export default Tddd;
