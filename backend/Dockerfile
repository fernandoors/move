FROM python:3.9.6-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    ca-certificates \
    python3-dev \
    gcc \
    musl-dev  \
    libpq-dev \
    libffi-dev \
    zlib1g-dev \
    automake \
    iputils-ping \
    iproute2 \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip
COPY . /root/home/ubuntu/Move
RUN pip3 install -r /root/home/ubuntu/Move/requirements.txt
ENV PYTHONPATH "${PYTHONPATH}:/root/home/ubuntu/Move"
WORKDIR /root/home/ubuntu/Move

EXPOSE 5000
