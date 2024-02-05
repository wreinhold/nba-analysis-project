# nba-analysis-project

This project was completed by William Reinhold for the UNC Data Science Bootcamp. It was created to fulfill the Data Visualization Track. 

Data & Setup:
    The data for this project was sourced from: https://www.kaggle.com/datasets/jamiewelsh2/nba-player-salaries-2022-23-season. Kaggle.com was created to be a community for data scientists and engineers to share data for various projects. This data was posted by another user so that others could engineer their own coding around it. In general, NBA data is available freely online and can be scraped. For more advanced statistics, this can be placed behind paywalls, but all of the data I used is publically available.

The frontend of this project was built using Vitejs, React, Rechart, and Material UI. These were not discussed in class but learned from their websites in order to fulfill the requirement of using a new library. You can find the documentation for each below.
        -> vitejs.dev
        -> react.dev
        -> recharts.org
        -> mui.com
To install the required libraries once you've cloned the project from GitHub, please use your terminal to navigate to nba-analysis-project -> frontend-code. Then enter 'vpm install' and the directories listed in package.json should download.

Project Explanation:
    In this project, I was tasked to create 3 visualizations to showcase any particular data that I wanted. I chose to build a dashboard that would illustrate how NBA teams are built, with the intent to determine if the best teams chose to build in any particular fashion.

Data Cleaning:
    Once I found the data set, I began to clean it in the data_cleaning.ipynb file in the backend-code directory. I dropped unnecessary columns, made sure that each player only counted towards one team, added a new column that stated if a player was a Starter, and grouped the data by team and position for future use. I then exported the grouped data and the cleaned salary data to JSONs to move over to my database.

Data Storage:
    Since I wanted to store JSON data, I decided to use MongoDB. For documentation on MongoDB, please use the below link.
            -> https://www.mongodb.com/docs/
    Once MongoDB is installed, open a terminal window and run the following code to get it started:
            -> brew services start mongodb-community@6.0
            -> mongosh
            -> .exit
    This will start MongoDB and quit out of it. Next, navigate to where you have cloned the repository, then go to backend-code -> Resources -> organized_data. Use the import statements below to then import the data into MongoDB.

    Import Statements:
        -> mongoimport --type json -d nba_analysis_db -c teams --drop --jsonArray team_sums.json
        -> mongoimport --type json -d nba_analysis_db -c players --drop --jsonArray player_info.json
        
    To check that the jsons were imported correctly, you can run the following code:
        -> mongosh
        -> use nba_analysis_db
        -> show collections
        -> db.players.findOne()
        -> db.teams.findOne()
    This will show you the first record in the database.

Data Visualization:
    In this section, I will walk through how to use the file and how I created it.
    
How to use:
    First, navigate to the nba-analysis-project in terminal. Then type the following commands:
        -> npm install
        -> npm run dev
        -> o
            (hit enter on your keyboard)
    This should now open the webpage in your browser.
    
To use the dashboard, please select whatever stat you choose and a team. Then, press the "Fetch Data" button to run the code. On change, the statistic will adjust the graphs, but to change teams, the button must be used. 

The 3 visualizations on the page are meant to show how teams are built in the NBA. The first shows the difference between the sum of salary and the sum of the chosen statistic for each position across a team. The second shows where individual players contribute towards that stat and shows how old each of them are. The final is a pie chart that shows the team summary as the whole pie, with players contributions as slices. 

How it was made:
    Part of the task for this project was to use a library that we had not learned in class, and after some research, I decided upon using Recharts. Recharts is a library to help build visualizations in JavaScript and is built off of React, another library that is useful in building webpages. In order to initallize the beginning React code, I used Vitejs. This creates the basic framework of a React project.

In order to get the data, I had to import that from the JSONs as well as all of the various dependencies from React, Recharts, and MUI. MUI was used to help build the drop down menus. React was used to get the status of the filters and then Recharts was used to build out the actual graphs.

The main code I worked on can be found in App.jsx that is located in the frontend-code->src folder.
