import dynamic from "next/dynamic";
import SkillIconLoader from "#/src/components/main/Skills/SkillIconLoader";
const IconAws = dynamic(() => import("#/src/components/Icons/logo/IconAws"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconCss = dynamic(() => import("#/src/components/Icons/logo/IconCss"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconHtml = dynamic(() => import("#/src/components/Icons/logo/IconHtml"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconJava = dynamic(() => import("#/src/components/Icons/logo/IconJava"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconJavascript = dynamic(() => import("#/src/components/Icons/logo/IconJavascript"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconJquery = dynamic(() => import("#/src/components/Icons/logo/IconJquery"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconMobx = dynamic(() => import("#/src/components/Icons/logo/IconMobx"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconMongo = dynamic(() => import("#/src/components/Icons/logo/IconMongo"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconMui = dynamic(() => import("#/src/components/Icons/logo/IconMui"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconMysql = dynamic(() => import("#/src/components/Icons/logo/IconMysql"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconNextjs = dynamic(() => import("#/src/components/Icons/logo/IconNextjs"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconNode = dynamic(() => import("#/src/components/Icons/logo/IconNode"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconReact = dynamic(() => import("#/src/components/Icons/logo/IconReact"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconReactQuery = dynamic(() => import("#/src/components/Icons/logo/IconReactQuery"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconRecoil = dynamic(() => import("#/src/components/Icons/logo/IconRecoil"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconRedux = dynamic(() => import("#/src/components/Icons/logo/IconRedux"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconSass = dynamic(() => import("#/src/components/Icons/logo/IconSass"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconStyled = dynamic(() => import("#/src/components/Icons/logo/IconStyled"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconTailwind = dynamic(() => import("#/src/components/Icons/logo/IconTailwind"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});
const IconTypescript = dynamic(() => import("#/src/components/Icons/logo/IconTypescript"), {
  ssr: false,
  loading: () => <SkillIconLoader />,
});

export {
  IconAws,
  IconCss,
  IconHtml,
  IconJava,
  IconJavascript,
  IconJquery,
  IconMobx,
  IconMongo,
  IconMui,
  IconMysql,
  IconNextjs,
  IconNode,
  IconReact,
  IconReactQuery,
  IconRecoil,
  IconRedux,
  IconSass,
  IconStyled,
  IconTailwind,
  IconTypescript,
};
