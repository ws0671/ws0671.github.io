import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Tag from "../components/Tag";
import Seo from "../components/Seo";
import Pagination from "../components/Pagination";

interface IBlogTagsTemplateProps {
  data: Queries.BlogTagsTemplateQuery;
  tag: string;
}
export default function Tags({
  pageContext,
  data,
  location,
}: PageProps<IBlogTagsTemplateProps>) {
  const { tag, currentPage, numPages } = pageContext;

  return (
    <div>
      <Layout>
        <main className="m-auto flex w-[80%]  max-md:flex-col">
          <div className=" relative w-[20%] after:absolute after:right-0 after:top-0 after:block after:h-[650px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-[''] max-md:w-full max-md:pb-10 max-md:after:from-transparent">
            <Tag />
          </div>
          <div className=" w-[80%] pl-10">
            <h1 className="mb-10 text-6xl font-bold">{tag}</h1>
            {data.allMdx.nodes.map((file) => (
              <div className="mb-10" key={file.id}>
                <div className="font-bold text-gray-400">
                  {file.frontmatter?.date}{" "}
                  <span className="ml-1 font-bold text-blue-500">
                    {file.frontmatter?.tags?.toUpperCase()}
                  </span>
                </div>

                <div className="mb-6 text-4xl font-bold ">
                  <Link
                    className="border-black hover:border-b"
                    to={`/blog/${file.frontmatter?.slug}`}
                  >
                    {file.frontmatter?.title}
                  </Link>
                </div>
                <div className="text-xl">{file.excerpt}</div>
              </div>
            ))}
            <Pagination
              location={location}
              currentPage={currentPage}
              numPages={numPages}
            />
          </div>
        </main>
      </Layout>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogTagsTemplate($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt(pruneLength: 20)
        frontmatter {
          title
          tags
          date(formatString: "YYYY.MM.DD")
          author
          slug
        }
        id
      }
    }
  }
`;

export const Head = ({ pageContext }) => (
  <Seo title={`Tagged as "${pageContext.tag}"`} />
);
