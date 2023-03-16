import React from 'react';
import Button from './components/button';
import UserCard from './components/userCard';
import Searchbar from './components/searchbar';
import RepositoryCard from './components/repositoryCard';
import Divider from './components/divider';

import './App.css';
import { User, Repository } from './types/graphql';

const testUser: User = {
  avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
  bio: "I'm a software engineer",
  login: "octocat",
  name: "Octocat"
}

const testRepositories: Repository[] = [{
  name: "Fancy Calculator",
  description: "A calculator application that performs complex mathematical operations with ease.",
  primaryLanguage: {
    name: "JavaScript",
    color: "#f1e05a"
  },
  url: "https://github.com/user/fancy-calculator"
}, {
  name: "Time Tracker",
  description: "An app that helps you keep track of your time spent on various tasks and projects.",
  primaryLanguage: {
    name: "Python",
    color: "#3572A5"
  },
  url: "https://github.com/user/time-tracker"
}, {
  name: "Recipe Book",
  description: "A digital recipe book that allows users to search, save, and organize their favorite recipes.",
  primaryLanguage: {
    name: "Ruby",
    color: "#701516"
  },
  url: "https://github.com/user/recipe-book"
}]

function App() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto w-full flex">
        <div className="bg-slate-100 p-10 basis-1/3">
          {/* Profile Section */}
          <UserCard user={testUser} />
        </div>
        <div className="bg-slate-500 p-10 flex-auto">
          {/* Main Section */}
          {/* Search Bar */}
          <Searchbar />

          {/* Spacer */}
          <div className="h-10"></div>

          {/* Search Results */}
          <div className="flex flex-col">
            {/* Search Result */}
            {testRepositories.map((repository, index) => (
              <>
                <RepositoryCard repository={repository} />
                {index !== testRepositories.length - 1 && < Divider />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
