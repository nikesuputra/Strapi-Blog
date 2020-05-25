import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      Title
      category {
        id
        Name
      }
      Thumbnail {
        url
      }
      Image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;