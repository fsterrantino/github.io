---
title: Stocks Data
layout: post
post-image: /assets/images/stocks_data.png
description: Project created during CoderHouse Data Engineer course. The objective is to create a complete ETL, from the API extraction to the Database load.

tags:
- Python (Pandas)
- Python (Requests)
- Python (SqlAlchemy)
- Amazon Redshift
- SQL
repo: https://github.com/fsterrantino/polygon_api
---

1. [Context](#context)
1. [Description](#description)
1. [Conclusions](#conclusions)
1. [Screenshots](#screenshots)

---

## Context
During the Data Engineer course each student developed a complete automated ETL. The objective was to select a public API, with information that's updated at least daily.
I chose Polygon API, which has good documentation and rate limits for the required use case.

## Description
### Extract
The retrieve it's done with the requests library. Planned to be executed daily in order to obtain yesterday's hourly prices of a pack of stocks.
### Load
The first step is to check if the data was already inserted. If not, the information is inserted in a Redshift Database.
<!-- ### Automation and development
Scripts are implemented in Docker and automated with Airflow. -->

<!-- ## Conclusions

## Screenshots -->

<!-- description: Project created during CoderHouse Data Engineer course. The objetive is to create a complete ETL, from the API extraction to the Database load, full automated with Airflow. -->