import * as React from 'react';
import PageStepper from '../assets/pageStepper';

// This section is how the page is actually set up
const Home = () => {

  return (
    <div>
      <h1>Welcome to the NBA Analysis Dashboard</h1>
      <p>Navigate to different pages to explore more.</p>    
      <body>
        <div>
          <p>This page was created by William Reinhold in order to analyze NBA teams constructions. To get the code for this page, please visit the GitHub Link.</p>
        </div>
        <div>
          <p>It was partially created during the University of North Carolina Data Science Bootcamp, but was added onto afterwards.</p>
        </div>
      </body>
      <body>
      <div>
          <PageStepper/>
      </div>
      </body>
    </div>

  );
};

export default Home;