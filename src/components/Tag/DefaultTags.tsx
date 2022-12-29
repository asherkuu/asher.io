import React from "react";
import {usePathname} from "next/navigation";

type DefaultTagsTypes = {
  customMeta?: object;
};

const DefaultTags: React.FC<DefaultTagsTypes> = ({customMeta}) => {
  const pathname = usePathname();
  const meta = {
    title: "김선규 – Developer, drawer.",
    description: `Front-end developer and JavaScript enthusiast.`,
    image: "https://ashpor.com/images/ashpor-banner.png",
    type: "website",
    ...customMeta,
  } as any;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://ashpor.com${pathname}`} />
      <link rel="canonical" href={`https://ashpor.com${pathname}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="김선규" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@asher_kuu" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta?.date && <meta property="article:published_time" content={meta?.date} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link color="#000000" href="/favicon/safari-pinned-tab.svg" rel="mask-icon" />
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
    </>
  );
};

export default DefaultTags;
