import { graphql, useStaticQuery } from 'gatsby'
import { AuthorsFrontmatterQueryResult, toAuthors } from './authors-frontmatter-query-result'

const useAuthorsAvatarsDefaultQuery: () => AuthorsFrontmatterQueryResult = () =>
  useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { author_id: { ne: null } } }
        sort: { fields: frontmatter___author_id }
      ) {
        nodes {
          frontmatter {
            author_id
            avatar {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            short_name
            slug
            bio
            hobby
            ex
          }
        }
      }
    }
  `)

export const useAuthorsAvatarsDefault = () => toAuthors(useAuthorsAvatarsDefaultQuery())
