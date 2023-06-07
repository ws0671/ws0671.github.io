import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Tag from "../components/Tag";

export default function About() {
  return (
    <Layout>
      <main className="m-auto flex w-[80%] max-md:w-[90%] max-md:flex-col">
        <div className=" relative w-[20%] after:absolute after:right-0 after:top-0 after:block after:h-[650px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-[''] max-md:w-full max-md:pb-10 max-md:after:from-transparent">
          <Tag />
        </div>

        <div className="pl-10 max-md:pl-0">
        <div className="mb-6 text-4xl font-bold max-md:text-3xl ">About</div>
        <div className="max-md:text-base text-xl"> 안녕하세요! 이곳은 About page입니다.</div>
        </div>
      </main>
    </Layout>
  );
}

export const Head = () => <Seo title="About" />;
