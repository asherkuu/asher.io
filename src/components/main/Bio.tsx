import React from "react";
import Image from "next/image";

const Bio: React.FC = () => {
  return (
    <article className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          김선규
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">프론트엔드 개발자</h2>
        <div className="max-w-lg">
          <p className="text-gray-600 dark:text-gray-300 mb-2 break-keep">
            3년 이상의 웹페이지 개발, 사용자를 위한 성능 개선 및 UX 최적화 그리고 새로운 기능에 대한
            만족도를 높인 경험이 있습니다.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2  break-keep">
            다양한 기술을 익히는 것을 좋아하고 새로운 기술을 이용해서 사이드 프로젝트를 진행하는
            것을 즐기고 있습니다. 항상 빠르게 발전하는 환경에서 뒤처지지 않기 위해서 새로운 기술과
            흐름을 파악하고 익숙해지려 노력해왔고 덕분에 다양한 기술을 빠르게 배우고 적응할 수 있게
            되었습니다.
          </p>
        </div>
      </div>
      <div className="w-[140px] sm:w-[140px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="김선규"
          height={140}
          width={140}
          src="/static/images/asher.png"
          sizes="30vw"
          priority
          className="rounded-full filter border-gray-200 border-2"
        />
      </div>
    </article>
  );
};

export default Bio;
