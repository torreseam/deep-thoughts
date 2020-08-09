import React from 'react';
//dependenceies to Integrate ApolloHooks
import { useQuery } from '@apollo/react-hooks';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
//import to see logged in users friends list 
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import FriendList from '../components/FriendsList';
import Auth from '../utils/auth';




const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  const loggedIn = Auth.loggedIn();

  // use object destructuing to extract 'data' from the 'useQuery' hook's response and rename it 'userdata' to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div> Loading...</div>
          ) : (
              <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
            )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;