import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  return (
    <Layout>
      <main className="mx-auto mt-[100px] w-[80vw]">
        <h1 className="text-6xl font-bold">{data.mdx?.frontmatter?.title}</h1>
        <h3 className="mt-10 text-lg text-gray-400">
          {data.mdx?.frontmatter?.date}
        </h3>
        <article className="prose mt-10 max-w-none">{children}</article>
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
        category
        headerImage
        date
        title
        slug
      }
    }
  }
`;
