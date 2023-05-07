import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useEffect } from "react";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  return (
    <Layout>
      <main className="mx-auto w-[60vw]">
        <h1 className="text-6xl font-bold">{data.mdx?.frontmatter?.title}</h1>
        <h3 className="mt-10 text-lg text-gray-400">
          {data.mdx?.frontmatter?.date}
        </h3>
        <article className="prose prose-xl mt-10 max-w-none">
          {children}
        </article>
      </main>
    </Layout>
  );
}
export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        tags
        headerImage
        date(formatString: "YYYY.MM.DD")
        title
        slug
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
