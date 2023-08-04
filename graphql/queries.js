import gql from 'graphql-tag'

export const allProjectsQuery = gql`
query allProjectsQuery {
    projects {
        data {
            id
            attributes {
                Title
                Description
                Gallery {
                    data {
                        attributes {
                            hash
                            name
                            url
                            previewUrl
                            provider
                        }
                    }
                }
                Slug
            }
        }
    }
}`

export const singleProjectQuery = gql`
query singleProjectQuery {
  project(id: 1) {
    data {
      id
      attributes {
        Title
        Description
        Gallery {
          data {
            attributes {
              hash
              name
              url
              previewUrl
              provider
            }
          }
        }
        Slug
      }
    }
  }
}`