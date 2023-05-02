import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <div className="text-2xl">
      <div className="flex justify-between p-5">
        <div>
          <span>Articles</span> <span>About</span>
        </div>
        <div className="flex">
          <div className="mr-2 h-10 w-10">
            <StaticImage
              className="rounded-full"
              src="../images/sheep_ttoja.png"
              alt="profile"
            />
          </div>
          <span>Lee young min</span>
        </div>
        <div className="flex items-center">
          <div>
            <StaticImage
              height={40}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Github logo"
            />
          </div>
          <div>
            <StaticImage
              height={30}
              src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
              alt="mail logo"
            ></StaticImage>
          </div>
        </div>
      </div>
    </div>
  );
}
