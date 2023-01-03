"use client";
import dynamic from "next/dynamic";
const SkillIcon = dynamic(() => import("#/src/components/main/Skills/SkillIcon"), {ssr: false});
const IconAws = dynamic(() => import("#/src/components/Icons/logo/IconAws"), {ssr: false});
const IconCss = dynamic(() => import("#/src/components/Icons/logo/IconCss"), {ssr: false});
const IconHtml = dynamic(() => import("#/src/components/Icons/logo/IconHtml"), {ssr: false});
const IconJava = dynamic(() => import("#/src/components/Icons/logo/IconJava"), {ssr: false});
const IconJavascript = dynamic(() => import("#/src/components/Icons/logo/IconJavascript"), {
  ssr: false,
});
const IconJquery = dynamic(() => import("#/src/components/Icons/logo/IconJquery"), {ssr: false});
const IconMobx = dynamic(() => import("#/src/components/Icons/logo/IconMobx"), {ssr: false});
const IconMongo = dynamic(() => import("#/src/components/Icons/logo/IconMongo"), {ssr: false});
const IconMui = dynamic(() => import("#/src/components/Icons/logo/IconMui"), {ssr: false});
const IconMysql = dynamic(() => import("#/src/components/Icons/logo/IconMysql"), {ssr: false});
const IconNextjs = dynamic(() => import("#/src/components/Icons/logo/IconNextjs"), {ssr: false});
const IconNode = dynamic(() => import("#/src/components/Icons/logo/IconNode"), {ssr: false});
const IconReact = dynamic(() => import("#/src/components/Icons/logo/IconReact"), {ssr: false});
const IconReactQuery = dynamic(() => import("#/src/components/Icons/logo/IconReactQuery"), {
  ssr: false,
});
const IconRecoil = dynamic(() => import("#/src/components/Icons/logo/IconRecoil"), {ssr: false});
const IconRedux = dynamic(() => import("#/src/components/Icons/logo/IconRedux"), {ssr: false});
const IconSass = dynamic(() => import("#/src/components/Icons/logo/IconSass"), {ssr: false});
const IconStyled = dynamic(() => import("#/src/components/Icons/logo/IconStyled"), {ssr: false});
const IconTailwind = dynamic(() => import("#/src/components/Icons/logo/IconTailwind"), {
  ssr: false,
});
const IconTypescript = dynamic(() => import("#/src/components/Icons/logo/IconTypescript"), {
  ssr: false,
});

const Skills: React.FC = () => {
  return (
    <article className="flex flex-col w-full">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
        Skills
      </h3>

      <div className="flex flex-col gap-12">
        <div className="w-full">
          <h3 className="font-bold text-md tracking-tight mb-2 text-black dark:text-white border-b-[1px] border-grey-300 pb-2">
            I`m currently working with ...
          </h3>
          <div className="flex gap-4 flex-wrap mt-4">
            <SkillIcon icon={<IconNextjs />} text="Next JS" />
            <SkillIcon icon={<IconReact />} text="React" />
            <SkillIcon icon={<IconTypescript />} text="Typescript" />
            <SkillIcon icon={<IconJavascript />} text="Javascript" />
            <SkillIcon icon={<IconRecoil />} text="Recoil" />
            <SkillIcon icon={<IconReactQuery />} text="React Query" />
            <SkillIcon icon={<IconMobx />} text="Mobx" />
            <SkillIcon icon={<IconStyled />} text="Styled Component" />
            <SkillIcon icon={<IconMui />} text="Material UI" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-md tracking-tight mb-2 text-black dark:text-white border-b-[1px] border-grey-300 pb-2">
            And I also handle it as a side project with ...
          </h3>
          <div className="flex gap-4 flex-wrap mt-4">
            <SkillIcon icon={<IconHtml />} text="HTML" />
            <SkillIcon icon={<IconCss />} text="CSS" />
            <SkillIcon icon={<IconJquery />} text="Jquery" />
            <SkillIcon icon={<IconSass />} text="Sass" />
            <SkillIcon icon={<IconTailwind />} text="Tailwind CSS" />
            <SkillIcon icon={<IconRedux />} text="Redux" />
            <SkillIcon icon={<IconJava />} text="Java" />
            <SkillIcon icon={<IconAws />} text="Aws" />
            <SkillIcon icon={<IconMysql />} text="Mysql" />
            <SkillIcon icon={<IconNode />} text="Node JS" />
            <SkillIcon icon={<IconMongo />} text="Mongo DB" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
