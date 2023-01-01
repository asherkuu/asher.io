import Link from "next/link";
import IconArrow from "#/src/components/Icons/IconArrow";
import ExperienceList from "#/src/components/main/Experience/ExperienceList";

const Experience: React.FC = () => {
  return (
    <article className="flex flex-col w-full">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white ">
        Work Experience
      </h3>

      <div className="flex gap-6 flex-col w-full">
        <ExperienceList />
      </div>

      <Link
        href="/experience"
        className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
      >
        <p>Read all posts</p>
        <IconArrow />
      </Link>
    </article>
  );
};

export default Experience;
