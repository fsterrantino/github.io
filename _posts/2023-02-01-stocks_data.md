---
title: Stocks Data
layout: post
post-image: /personal-website/assets/images/stocks_data.png
description: Project created during CoderHouse Data Engineer course. The objective is to create a complete ETL, from the API extraction to the Database load.

tags:
- Python (Pandas)
- Python (Requests)
- Python (SqlAlchemy)
- Airflow
- Amazon Redshift
- SQL
repo: https://github.com/fsterrantino/polygon_api
---

1. [Context](#context)
1. [Architecture](#architecture)
1. [Screenshots sample](#screenshots sample)
1. [Description](#description)
1. [Screenshots](#screenshots)

---

## Context
During CoderHouse Data Engineer course, each student developed a complete automated ETL. The objective was to select a public API, with information that's updated at least daily.
I chose Polygon API, which has good documentation and rate limits for the required use case.

## Architecture
![Alt Text](/personal-website/assets/images/stocks_data/architecture.png)

## Screenshots sample
Look for Screenshots section in order to see the full execution.
### Airflow run
![Alt Text](/personal-website/assets/images/stocks_data/screenshots/screenshot_1.png)
### Postgre load
![Alt Text](/personal-website/assets/images/stocks_data/screenshots/screenshot_2.png)
### Alert mail
![Alt Text](/personal-website/assets/images/stocks_data/screenshots/screenshot_3.png)

## Description
### Extract
The retrieve it's done with the requests library. Planned to be executed daily in order to obtain yesterday's hourly prices of a pack of stocks. It also functions properly in a backfill process, retrieving historical data. The request sends a Json string that it's parsed in order to obtain required columns and create a CSV.
### Transform
In this phase some adjustments are made on the data in order to be uploaded correctly. It also includes the integrity control, checking if data was already inserted in Redshift. The control it's done by loading the DB data as a Dataframe and merging it with the rows to be inserted, using two keys: Ticker and datetime. If not, a 'csv' file is generated to be inserted in a Redshift Database. If duplicates are found, a support file is created in order to analyze duplicated values.
### Load
The upload it's done with SQLAlchemy library, after integrity controls are finished.
### Alerts
An specific alert was designed in order to send an e-mail if a stock close price decreases or increases it's value by a configurable percentage. The e-mail has the detail of identified rows.
### Automation and development
Scripts are implemented in Docker, using Dockerfile and Docker-Compose files, and automated with Airflow. They are included to the project as a Poetry Wheel, and installed through the Dockerfile in order to be imported by the DAG.
The DAG establishes tasks dependencies in order to guarantee a correct execution. Extraction, transform and load are sequential tasks, while the alert process executes in parallel after the extraction finishes.

## Screenshots
Showcase of some steps of the execution analysing some significant actions and their conclusions.
[Download PDF](/personal-website/assets/images/stocks_data/Screenshots.pdf)
