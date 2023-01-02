import dynamic from "next/dynamic";

const ProsCard = dynamic(() => import("#/src/components/common/post/ProsCard"), {ssr: false});
const ConsCard = dynamic(() => import("#/src/components/common/post/ConsCard"), {ssr: false});
const CustomLink = dynamic(() => import("#/src/components/common/post/CustomLink"), {ssr: false});
const RoundedImage = dynamic(() => import("#/src/components/common/post/RoundedImage"), {
  ssr: false,
});
const Callout = dynamic(() => import("#/src/components/common/post/Callout"), {ssr: false});
const Analytics = dynamic(() => import("#/src/components/common/post/metrics/Analytics"), {
  ssr: false,
});
const Step = dynamic(() => import("#/src/components/common/post/Step"), {ssr: false});
const ImageWithTheme = dynamic(() => import("#/src/components/common/post/ImageWithTheme"), {
  ssr: false,
});

// import Unsplash from 'components/metrics/Unsplash';
// import YouTube from 'components/metrics/Youtube';

export const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  // Unsplash,
  // YouTube
};
