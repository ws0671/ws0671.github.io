import React from "react";
import { PageProps, graphql, Link } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);

  return (
    <div>
      <div>
        {data.allMdx.nodes.map((i) => (
          <div key={i.id}>{i.frontmatter?.title}</div>
        ))}
      </div>
    </div>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
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
