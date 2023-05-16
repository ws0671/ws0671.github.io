import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  const [menuClick, setMenuClick] = useState(false);
  const handleMenuClick = () => {
    setMenuClick((prev) => !prev);
  };
  return (
    <div>
      <div className="sticky top-0 z-50 w-full bg-white/50 px-[150px] text-2xl backdrop-blur-sm max-md:hidden">
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
              <a href="https://github.com/ws0671" target="_blank">
                <StaticImage
                  height={40}
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="Github logo"
                />
              </a>
            </div>
            <div>
              <a href="mailto:wscan0671@gmail.com">
                <StaticImage
                  height={30}
                  src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                  alt="mail logo"
                ></StaticImage>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 w-full bg-white/50 p-5 text-2xl backdrop-blur-sm md:hidden">
        <div className="flex justify-between">
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
          {menuClick ? (
            <svg
              onClick={handleMenuClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={handleMenuClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {menuClick && (
          <div className="absolute z-50 mt-5 w-full space-y-5 bg-white">
            <div>
              <Link to="/"> Articles</Link>
            </div>
            <div>
              <Link to="/about"> About</Link>
            </div>
            <div className="flex items-center justify-center pb-3">
              <div className="mr-5">
                <a href="https://github.com/ws0671" target="_blank">
                  <StaticImage
                    height={40}
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github logo"
                  />
                </a>
              </div>
              <div className="ml-5">
                <a href="mailto:wscan0671@gmail.com">
                  <StaticImage
                    height={30}
                    src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                    alt="mail logo"
                  ></StaticImage>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
