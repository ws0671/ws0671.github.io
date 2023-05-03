import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <div>
      <div className="mx-[150px] text-2xl">
        <div className="flex justify-between p-5">
          <div>
            <span className="mr-5">Articles</span> <span>About</span>
          </div>
          <div className="flex">
            <div className="mr-5 h-10 w-10">
              <StaticImage
                className="rounded-full"
                src="../images/sheep_ttoja.png"
                alt="profile"
              />
            </div>
            <span>Lee young min</span>
          </div>
          <div className="flex items-center">
            <div className="mr-5">
              <StaticImage
                height={40}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Github logo"
              />
            </div>
            <div>
              <StaticImage
                height={30}
                src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                alt="mail logo"
              ></StaticImage>
            </div>
          </div>
        </div>
      </div>
      <main className="m-auto flex w-[80%]">
        <div className="h-[100vh] w-[20%] bg-blue-300"></div>
        <div className="h-[100vh] w-[80%] bg-yellow-300">
          {data.allMdx.nodes.map((file) => (
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <div key={file.id}>
                <div>{file.frontmatter?.date}</div>
                <div>{file.frontmatter?.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
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
