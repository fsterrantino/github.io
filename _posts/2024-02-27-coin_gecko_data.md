---
title: Coin Gecko - Stocks Data
layout: post
post-image: /personal-website/assets/images/coin_gecko_data.png
description: ETL project using Websockets and Kafka.
tags:
- Docker
- Postgres
- Kafka
- Kafdrop
- Airflow
repo: https://github.com/fsterrantino/coin_gecko_etl

---

1. [Architecture](#architecture)
1. [Objective](#objective)
1. [Description](#description)
1. [Screenshots sample](#screenshots sample)
1. [Screenshots](#screenshots)

---

## Architecture
![Alt Text](/personal-website/assets/images/coin_gecko_data/architecture.jpg)

## Objective
The objective of the project it's to be able to create a constant source of cryptos market trades using python websocket and produce and consume that information with a Kafka topic.

## Description
The idea was to focus in the 'E' and 'L' part of the ETL. Consuming online API data, stream it to Kafka with a Producer and consume it in order to load data into a Postgres Database (automatically creating DB and table) once there is a batch of records.

## Screenshots sample
<br>
Dag execution:
<br>
![Alt Text](/personal-website/assets/images/coin_gecko_data/Screenshots/coing_gecko_dag_execution.jpg)
<br>
<br>
Messages received in Kafka topic:
<br>
![Alt Text](/personal-website/assets/images/coin_gecko_data/Screenshots/coing_gecko_kafka_topic.jpg)
<br>
<br>
Data loaded in postgres DB:
<br>
![Alt Text](/personal-website/assets/images/coin_gecko_data/Screenshots/coing_gecko_postgres.jpg)

## Screenshots
Showcase of some steps of the execution analysing some significant actions and their conclusions.
[Download PDF](/personal-website/assets/images/coin_gecko_data/Screenshots.pdf)
