import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="m-auto mt-[100px] flex w-[80%]">
        <div className=" relative w-[20%] after:absolute after:right-0 after:after:block after:h-[540px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-['']"></div>
        <div className=" w-[80%] pl-10">
          <h1 className="mb-10 text-6xl font-bold">About</h1>
          <p className="text-xl"> 안녕하세요! 이곳은 About page입니다.</p>
        </div>
      </main>
    </Layout>
  );
}
