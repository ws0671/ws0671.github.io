import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";

export default function IndexPage({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data.allMdx.nodes);

  return (
    <div>
      <Layout>
        <main className="m-auto mt-[100px] flex w-[80%]">
          <div className=" relative w-[20%] after:absolute after:right-0 after:after:block after:h-[540px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-['']"></div>
          <div className=" w-[80%] pl-10">
            {data.allMdx.nodes.map((file) => (
              <div className="mb-10" key={file.id}>
                <div className="text-gray-400">{file.frontmatter?.date}</div>
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

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 10)
        frontmatter {
          title
          category
          date
          author
          slug
          headerImage
        }
        id
      }
    }
  }
`;
