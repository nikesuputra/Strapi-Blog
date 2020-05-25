import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
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
      Publish_at
    }
  }
`;

export default ARTICLE_QUERY;