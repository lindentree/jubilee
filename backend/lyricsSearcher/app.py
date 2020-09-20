__copyright__ = "Copyright (c) 2020 Jina AI Limited. All rights reserved."
__license__ = "Apache-2.0"

import os
from flask import (Flask, render_template, jsonify, send_from_directory, request)
from flask_cors import CORS

import click
from jina.flow import Flow


def config():
    # delete data file later
    os.environ["JINA_DATA_FILE"] = os.environ.get(
        "JINA_DATA_FILE", "../db/all-lyrics.txt"
    )
    os.environ["JINA_WORKSPACE"] = os.environ.get("JINA_WORKSPACE", "workspace")

    os.environ["JINA_PORT"] = os.environ.get("JINA_PORT", str(46785))
   

config()

app = Flask(__name__, static_folder="../../frontend/jubilee-front-end/build/static", template_folder="../../frontend/jubilee-front-end/build")
CORS(app, support_credentials=True)

f = Flow(rest_api=True).load_config("flow-query.yml")

@app.route("/")
def my_index():
    
    return render_template("index.html") 

@app.route('/api/search', methods=['POST'])
def query_restful():
    print(request.__dict__)

    f.use_rest_gateway()
    with f:
        f.block()
    # print('jina call', x)
    # return x


@app.route('/api/test', methods=['GET', 'POST'])
# 


# def print_topk(resp, sentence):
#     for d in resp.search.docs:
#         print(f"🔮This might be the Songs you searched for with lyrics: {sentence}")
#         for idx, match in enumerate(d.matches):

#             score = match.score.value
#             if score < 0.0:
#                 continue
#             meta = match.meta_info.decode().split("-")
#             if len(meta) == 2:
#                 name, artist = meta
#             lyrics = match.text.strip()

#             print(f'> {idx:>2d}({score:.2f}). {name.upper()} :  "{lyrics}"')

def index(num_docs):
    f = Flow().load_config("flow-index.yml")

    with f:
        f.index_lines(
            filepath=os.environ["JINA_DATA_FILE"],
            batch_size=8,
            size=num_docs,
        )



# def query(top_k):
#     f = Flow().load_config("flow-query.yml")
#     with f:
#         while True:
#             text = input("please type a sentence: ")
#             if not text:
#                 break

#             def ppr(x):
#                 print_topk(x, text)
#             f.search_lines(lines=[text,], output_fn=ppr, top_k=top_k)


# def query_restful():
#     f = Flow().load_config("flow-query.yml")
#     f.use_rest_gateway()
#     with f:
#         f.block()


def dryrun():
    f = Flow().load_config("flow-index.yml")
    with f:
        f.dry_run()


@click.command()
@click.option(
    "--task",
    "-t",
    type=click.Choice(
        ["index", "query", "query_restful", "dryrun"], case_sensitive=False
    ),
)
@click.option("--num_docs", "-n", default=50)
@click.option("--top_k", "-k", default=5)

def main(task, num_docs, top_k):
   
    if task == "index":
        index(num_docs)
    if task == "query":
        query(top_k)
    if task == "query_restful":
        query_restful()
    if task == "dryrun":
        dryrun()


if __name__ == "__main__":
    #main()
    app.run(host='0.0.0.0', debug=True)





