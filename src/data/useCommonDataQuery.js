import { graphql, useStaticQuery } from "gatsby"

export const useCommonDataQuery = () => {

  const commonData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          organization
        }
      }
    }
  `)

  return commonData
}