import React from 'react';
import UserCard from '@/components/UserCard';

import { GetUserByLoginQuery } from '@/types/graphql';
import RepositoryList from '@/components/RepositoryList';

import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
// Load graphql query from file
const GetUserByLogin = loader('./graphql/queries/getUser.graphql');


function App() {
  // Load data from graphql query and store it in typed variables
  const { loading, error, data } = useQuery<GetUserByLoginQuery>(GetUserByLogin, { variables: { login: "octocat" } });

  return (
    <div className="flex flex-col bg-slate-100 py-10 min-h-screen-dhv" >
      {/* Display data only if loading is done and the query completed successfully */}
      {!loading && !error && data &&
        <div className="container mx-auto w-full flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="bg-slate-100 p-10 basis-1/3">
            < UserCard user={data.user} />
          </div>
          {/* Main Section */}
          <div className="bg-slate-500 p-10 flex-auto rounded-md">
            <RepositoryList repositories={data.user.repositories.nodes ?? []} />
          </div>
        </div>
      }
    </div >
  );
}

export default App;
