FROM pytorch/pytorch:latest

WORKDIR /

RUN apt-get update && \
    apt-get install --no-install-recommends -y git \
                                               curl

RUN python3 -m pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir transformers \
                               jina[http]==0.4.1

RUN python3 -c "from transformers import DistilBertModel, DistilBertTokenizer; x='distilbert-base-cased'; DistilBertModel.from_pretrained(x); DistilBertTokenizer.from_pretrained(x)"

COPY . /

RUN bash get_data.sh ./data && \
    python app.py -t index && \
    rm -rf data

ENTRYPOINT ["python3", "app.py", "-t", "query_restful"]
