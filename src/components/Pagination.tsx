import React from "react";
import { Link } from "gatsby";

interface IPaginationProps {
  currentPage: number;
  numPages: number;
}

export default function Pagination({
  currentPage,
  numPages,
  location,
}: IPaginationProps) {
  const urlNumber = +location.pathname.slice(-2, -1) || 0;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `${location.pathname.split("page")[0]}`
      : `${location.pathname.split("page")[0]}page/${currentPage - 1}`;
  const nextPage = `${location.pathname.split("page")[0]}page/${
    currentPage + 1
  }`;
  return (
    <div className="flex items-center space-x-3 text-3xl text-gray-500 ">
      {/* 이전 페이지 링크 */}
      {!isFirst && (
        <Link to={prevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-6 w-6 hover:text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      )}

      {/* 페이지 번호 표시 */}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          className={`${
            urlNumber === i + 1 ? "border-b border-black text-blue-500" : ""
          }${
            !urlNumber && urlNumber === i
              ? "border-b border-black text-blue-500"
              : ""
          } hover:border-b hover:border-black hover:text-blue-500`}
          key={`page-${i + 1}`}
          to={`${
            i === 0
              ? `${location.pathname.split("page")[0]}`
              : `${location.pathname.split("page")[0]}page/${i + 1}`
          }`}
        >
          {i + 1}
        </Link>
      ))}
      {/* 다음 페이지 링크 */}
      {!isLast && (
        <Link to={nextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-6 w-6 hover:text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
