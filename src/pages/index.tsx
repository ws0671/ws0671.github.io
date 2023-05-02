import * as React from "react";

export default function IndexPage() {
  return (
    <div className="text-2xl">
      <div className="flex justify-between p-5">
        <div>
          <span>Articles</span> <span>About</span>
        </div>
        <div className="flex">
          <div className="mr-2 h-10 w-10 rounded-full bg-sky-300"></div>
          <span>Lee young min</span>
        </div>
        <div>
          <span>깃허브</span>
          <span>메일</span>
        </div>
      </div>
    </div>
  );
}
