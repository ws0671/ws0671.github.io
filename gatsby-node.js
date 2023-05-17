const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tags.tsx");

  const result = await graphql(`
    {
      postsRemark: allMdx(sort: { frontmatter: { date: DESC } }, limit: 2000) {
        edges {
          node {
            frontmatter {
              tags
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  //Create blog-list pages
  const posts = result.data.postsRemark.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    const firstPage = i === 0;
    const currentPage = i + 1;
    createPage({
      path: firstPage ? `/` : `/page/${currentPage}`,
      component: path.resolve("./src/templates/blog-list-template.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // // Make tag pages
  // tags.forEach((tag) => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //     component: tagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   });
  // });

  //Create tag-list pages
  tags.forEach((tag) => {
    const posts = tag.totalCount;
    const postsPerPage = 6;
    const numPages = Math.ceil(posts / postsPerPage);
    Array.from({ length: numPages }).forEach((item, i) => {
      const firstPage = i === 0;
      const currentPage = i + 1;
      createPage({
        path: firstPage
          ? `/tags/${_.kebabCase(tag.fieldValue)}/`
          : `/tags/${_.kebabCase(tag.fieldValue)}/page/${currentPage}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
