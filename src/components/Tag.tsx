import React from "react";
import { Link, graphql, PageProps, useStaticQuery } from "gatsby";
import kebabCase from "lodash/kebabCase";

export default function Tag() {
  const data = useStaticQuery<Queries.BlogTagsQuery>(graphql`
    query BlogTags {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <ul>
      {data.allMdx.group.map((file, idx) => (
        <Link to={`/tags/${kebabCase(file.fieldValue)}/`}>
          <li
            key={idx}
            className="mx-2 my-1 inline-block rounded-3xl border border-gray-300 p-2"
          >
            {file.fieldValue} {file.totalCount}
          </li>
        </Link>
      ))}
    </ul>
  );
}
