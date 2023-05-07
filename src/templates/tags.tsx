import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Tag from "../components/Tag";
import Seo from "../components/Seo";

export default function Tags({
  pageContext,
  data,
}: PageProps<Queries.BlogPostsQuery>) {
  const { tag } = pageContext;

  return (
    <div>
      <Layout>
        <main className="m-auto flex w-[80%]">
          <div className=" relative w-[20%] after:absolute after:right-0 after:after:block after:h-[540px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-['']">
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
          </div>
        </main>
      </Layout>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPosts($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt(pruneLength: 10)
        frontmatter {
          title
          tags
          date(formatString: "YYYY.MM.DD")
          author
          slug
          headerImage
        }
        id
      }
    }
  }
`;

export const Head = ({ pageContext }) => (
  <Seo title={`Tagged as "${pageContext.tag}"`} />
);
