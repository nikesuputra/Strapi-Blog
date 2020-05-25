import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      Name
      articles {
        id
        Title
        Content
        Thumbnail {
            url
          }
        Image {
          url
        }
        category {
          id
          Name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;