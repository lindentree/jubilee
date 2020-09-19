__copyright__ = "Copyright (c) 2020 Jina AI Limited. All rights reserved."
__license__ = "Apache-2.0"

import os

import click
from jina.flow import Flow


def config():
    os.environ["JINA_DATA_FILE"] = os.environ.get(
        "JINA_DATA_FILE", "data/character-lines.csv"
    )
    os.environ["JINA_WORKSPACE"] = os.environ.get("JINA_WORKSPACE", "workspace")

    os.environ["JINA_PORT"] = os.environ.get("JINA_PORT", str(45678))

# for reference. Delete later
def print_topk(resp, sentence):
    for d in resp.search.docs:
        print(f"Ta-Dah🔮, here are what we found for: {sentence}")
        for idx, match in enumerate(d.matches):

            score = match.score.value
            if score < 0.0:
                continue
            song_name = match.meta_info.decode()
            lyrics = match.text.strip()
            print(f'> {idx:>2d}({score:.2f}). {song_name.upper()} :, "{lyrics}"')


def index(num_docs):
    f = Flow().load_config("flow-index.yml")

    with f:
        f.index_lines(
            filepath=os.environ["JINA_DATA_FILE"],
            batch_size=8,
            size=num_docs,
        )


# Integrate to front end
def send_topk_song(resp, sentence):
    for d in resp.search.docs:
        print(f"Ta-Dah🔮, here are what we found for: {sentence}")
        for idx, match in enumerate(d.matches):

            score = match.score.value
            if score < 0.0:
                continue
            song_name = match.meta_info.decode()
            lyrics = match.text.strip()
            # TODO: send song_name and lyrics.

            print(f'> {idx:>2d}({score:.2f}). {song_name.upper()} :, "{lyrics}"')


# Integrate to front end.
def query_from_frontend(top_k = 1):
    f = Flow().load_config("flow-query.yml")
    with f:
        while True:
            # TODO: geting searching text from frontend.
            text = ""
            if not text:
                break

            def ppr(x):
                send_topk_song(x, text)
            f.search_lines(lines=[text, ], output_fn=ppr, top_k=top_k)


# for reference. Delete later
def query(top_k):
    f = Flow().load_config("flow-query.yml")
    with f:
        while True:
            text = input("please type a sentence: ")
            if not text:
                break

            def ppr(x):
                print_topk(x, text)
            f.search_lines(lines=[text, ], output_fn=ppr, top_k=top_k)


def query_restful():
    f = Flow().load_config("flow-query.yml")
    f.use_rest_gateway()
    with f:
        f.block()



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
    config()
    if task == "index":
        index(num_docs)
    if task == "query":
        query_from_frontend()
    if task == "query_restful":
        query_restful()
    if task == "dryrun":
        dryrun()


if __name__ == "__main__":
    main()
