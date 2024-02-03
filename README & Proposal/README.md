# nba-analysis-project

This project was completed by William Reinhold for the UNC Data Science Bootcamp. It was created to fulfill the Data Visualization Track. 

Data & Setup:
    The data for this project was sourced from: https://www.kaggle.com/datasets/jamiewelsh2/nba-player-salaries-2022-23-season.

    The frontend of this project was built using Vitejs, React, Rechart, and Material UI. These were not discussed in class but learned from their websites in order to fulfill the requirement of using a new library. You can find the documentation for each below.
        -> vitejs.dev
        -> react.dev
        -> recharts.org
        -> mui.com
    To install the required libraries once you've cloned the project from GitHub, please use your terminal to navigate to nba-analysis-project -> frontend-code. Then enter 'vpm install' and the directories listed in package.json should download.

Project Explanation:
    In this project, I was tasked to create 3 visualizations to showcase any particular data that I wanted. I chose to build a dashboard that would illustrate how NBA teams are built, with the intent to determine if the best teams chose to build in any particular fashion.

    Once I found the data set, I began to clean it in the data_cleaning.ipynb file in the backend-code directory. I dropped unnecessary columns, made sure that each player only counted towards one team, added a new column that stated if a player was a Starter, and grouped the data by team and position for future use.