import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql, PageProps } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import kebabCase from "lodash/kebabCase";
import Tag from "../components/Tag";

export default function IndexPage({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout>
      <main className="m-auto flex w-[80%]">
        <div className="relative w-[20%] after:absolute after:right-0 after:top-0 after:block after:h-[650px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-['']">
          <Tag />
        </div>
        <div className="w-[80%] pl-10">
          {data.allMdx.nodes.map((file) => (
            <div className="mb-10" key={file.id}>
              <div className=" font-bold text-gray-400">
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
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
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

export const Head = () => <Seo title="Blog" />;
