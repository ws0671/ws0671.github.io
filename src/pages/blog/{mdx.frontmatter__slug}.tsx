import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogPost({ data, children }) {
  return (
    <main className="mx-auto mt-20 w-[80vw]">
      <article className="prose max-w-none">{children}</article>
    </main>
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
