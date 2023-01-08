import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose dark:prose-dark leading-6">
        <h2>Links</h2>
        <ul>
          <li>
            GitHub: <a href="https://github.com/asherkuu">@asherkuu</a>
          </li>
          <li>
            Website: <Link href="https://ashpor.com">https://ashpor.com</Link>
          </li>
          <li>
            Blog: <Link href="https://velog.io/@ashekruu">https://velog.io/@ashekruu</Link>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/asher-kim/">
              https://www.linkedin.com/in/asher-kim
            </a>
          </li>
        </ul>
        <h2>Bio</h2>
        <ul>
          <li>Age: 27세</li>
          <li>
            Eamil: <a href="mailto:asher_kuu@naver.com">asher_kuu@naver.com</a>
          </li>
          <li>병역: 병장 만기전역</li>
        </ul>
        <h3>Job Title</h3>
        <p>김선규, 3+years FrontEnd Developer Experience at BSS Compay now.</p>

        <h3>Education</h3>
        <p>
          - [NCS] 디지털컨버전스 응용SW 개발자 양성과정 (KH정보교육원 19.02 - 19.08)
          <br />
          Java Web Programing 개발 과정 이수
          <br />
          <br />- 사이버대학교 3학년 편입 준비중
        </p>
      </div>
    </div>
  );
};

export default About;
