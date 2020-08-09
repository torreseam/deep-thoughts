import gql from 'graphql-tag';


//import the gql tagged template literal functionality to create a GraphQL mutation called login
export const LOGIN_USER = gql`
    mutation logon($email: String!, $password: String!), {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
