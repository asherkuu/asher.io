import ProsCard from "#/src/components/common/post/ProsCard";
import ConsCard from "#/src/components/common/post/ConsCard";
import CustomLink from "#/src/components/common/post/CustomLink";
import RoundedImage from "#/src/components/common/post/RoundedImage";
import Callout from "#/src/components/common/post/Callout";
import Analytics from "#/src/components/common/post/metrics/Analytics";
import Step from "#/src/components/common/post/Step";
import ImageWithTheme from "#/src/components/common/post/ImageWithTheme";
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
