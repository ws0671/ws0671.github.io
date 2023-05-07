import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <div className="sticky top-0 z-50 w-full bg-white/50 px-[150px] text-2xl backdrop-blur-sm">
        <div className="flex justify-between p-5">
          <div>
            <span className="mr-5">
              <Link className="border-black hover:border-b" to="/">
                Articles
              </Link>
            </span>{" "}
            <span>
              <Link className="border-black hover:border-b" to="/about">
                About
              </Link>
            </span>
          </div>
          <Link to="/">
            <div className="flex">
              <div className="mr-5 h-10 w-10">
                <StaticImage
                  className="rounded-full"
                  src="../images/sheep_ttoja.png"
                  alt="profile"
                />
              </div>
              <span>Lee young min</span>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="mr-5">
              <Link to="https://github.com/ws0671" target="_blank">
                <StaticImage
                  height={40}
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="Github logo"
                />
              </Link>
            </div>
            <div>
              <Link to="mailto:wscan0671@gmail.com">
                <StaticImage
                  height={30}
                  src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                  alt="mail logo"
                ></StaticImage>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
