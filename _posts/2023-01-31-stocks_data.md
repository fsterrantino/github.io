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
1. [Description](#description)
1. [Architecture](#architecture)
1. [Screenshots](#screenshots)

---

## Context
During the Data Engineer course each student developed a complete automated ETL. The objective was to select a public API, with information that's updated at least daily.
I chose Polygon API, which has good documentation and rate limits for the required use case.

## Description
### Extract
The retrieve it's done with the requests library. Planned to be executed daily in order to obtain yesterday's hourly prices of a pack of stocks.
### Transform
In this phase some adjustments are made on the data in order to be uploaded correctly. It also includes the integrity control, checking if data was already inserted. If not, a 'csv' file is generated to be inserted in a Redshift Database. If duplicates are found, a support file is created in order to analyze duplicated values.
### Load
The upload it's done with SQLAlchemy library.
### Alerts
An specific alert was designed in order to send an e-mail if a stock close price decreases or increases it's value by a configurable percentage. The e-mail has the detail of identified rows.
### Automation and development
Scripts are implemented in Docker, using Dockerfile and Docker-Compose files, and automated with Airflow. The scripts are included to the project as a Poetry Wheel, and installed through the Dockerfile in order to be imported by the DAG.

## Architecture
![Alt Text](/personal-website/assets/images/stocks_data/architecture.png)

## Screenshots
[Download PDF](/personal-website/assets/images/stocks_data/Screenshots.pdf)
