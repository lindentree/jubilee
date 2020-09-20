#!/usr/bin/env python3

import os
from flask import (Flask, render_template)

app = Flask(__name__, static_folder="../frontend/jubilee-front-end/build/static", template_folder="../frontend/jubilee-front-end/build")

@app.route("/")
def my_index():
    return render_template("index.html") #flask_token="Hello   world")


@app.route('/api/items')
def items():
  '''Sample API route for data'''
  return jsonify([{'title': 'A'}, {'title': 'B'}])


app.run(debug=True)
