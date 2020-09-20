#!/usr/bin/env python3

import os
import requests
from flask import (Flask, render_template, jsonify, send_from_directory)
from flask_cors import CORS


app = Flask(__name__, static_folder="../frontend/jubilee-front-end/build/static", template_folder="../frontend/jubilee-front-end/build")

@app.route("/")
def my_index():
    return render_template("index.html") #flask_token="Hello   world")


@app.route('/api/songs')
def items():
    url = 'http://0.0.0.0:45678/api/search'
    myobj = {"top_k": 10, "mode": "search",  "data": ["text:hey, dude"]}

    x = requests.post(url, data = myobj)

    print(x.text)


app.run(debug=True)
