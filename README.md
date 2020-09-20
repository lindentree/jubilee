# Jubilee 
A song recommender based on your mood or what's on your mind
# Introduction
We created a dataset of songs with lyrics from www.azlyrics.com and used Jina to index it for semantic search. 
Then the user can type in whatever they're thinking about and get songs with lyrics that hold similar meanings to what they typed.

# Tech Stack
Jina.ai  
Flask   
React.js  
JavaScript

# Setup
Clone our github repository, 
cd into frontend/jubilee-front-end and `npm run build`, then cd into backend/lyricsSearcher and `export FLASK_APP=app.py`, then `flask run --host=0.0.0.0` and the app will be available at localhost:5000 in your browser
