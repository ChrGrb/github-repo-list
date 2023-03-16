import React from 'react';
import Button from './components/button';
import User from './components/user';
import Searchbar from './components/searchbar';
import Repository from './components/repository';
import Divider from './components/divider';

import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto w-full flex">
        <div className="bg-slate-100 p-10 basis-1/3">
          {/* Profile Section */}
          <User />
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
            <Repository />
            <Divider />
            <Repository />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
