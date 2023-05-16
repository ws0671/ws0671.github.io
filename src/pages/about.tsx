import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Tag from "../components/Tag";

export default function About() {
  return (
    <Layout>
      <main className="m-auto flex w-[80%]  max-sm:flex-col">
        <div className=" relative w-[20%] after:absolute after:right-0 after:top-0 after:block after:h-[650px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-[''] max-sm:w-full max-sm:pb-10 max-sm:after:from-transparent">
          <Tag />
        </div>

        <div className=" w-[80%] pl-10">
          <h1 className="mb-10 text-6xl font-bold">About</h1>
          <p className="text-xl"> 안녕하세요! 이곳은 About page입니다.</p>
        </div>
      </main>
    </Layout>
  );
}

export const Head = () => <Seo title="About" />;
