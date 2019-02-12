import gql from 'graphql-tag';

// GraphQL Mutation that writes a management object to mongoDB
export const queryStockXByString = gql`
  query queryStockXByString($query: String) {
    queryStockXByString(query: $query)
  }

`;


// export const userInfo = gql`
//   query userInfo($email: String!) {
//     userInfo(email: $email)
//   }
// `;