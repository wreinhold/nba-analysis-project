import requests
from bs4 import BeautifulSoup
import pandas as pd
import schedule
import time

# Define the URL of the Basketball Reference page you want to scrape
url = 'https://www.basketball-reference.com/leagues/NBA_2024_per_game.html'

def scrape_stats():
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find the table with the player stats
        table = soup.find('table', {'id': 'per_game_stats'})
        
        # Extract the headers
        headers = [th.getText() for th in table.find_all('tr', limit=2)[0].find_all('th')][1:]
        
        # Extract the player stats
        rows = table.find_all('tr')[1:]
        player_stats = []
        for row in rows:
            stats = [td.getText() for td in row.find_all('td')]
            if stats:
                player_stats.append(stats)
        
        # Create a DataFrame
        df = pd.DataFrame(player_stats, columns=headers)
        
        # Save the DataFrame to a CSV file
        df.to_csv('player_stats.csv', index=False)
        print("Data scraped and saved to player_stats.csv")
    else:
        print(f"Failed to retrieve data: {response.status_code}")

# Schedule the script to run daily at a specified time
schedule.every().day.at("10:00").do(scrape_stats)

# Keep the script running
while True:
    schedule.run_pending()
    time.sleep(1)
