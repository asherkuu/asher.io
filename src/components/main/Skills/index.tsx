import SkillIcon from "#/src/components/main/Skills/SkillIcon";
import {
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
} from "#/src/components/main/Skills/Icons";

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
