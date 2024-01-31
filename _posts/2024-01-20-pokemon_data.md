---
title: Pokemon Data
layout: post
post-image: /personal-website/assets/images/pokemon_data.png
description: Create an ETL process that extracts Pokemons information from an API in a Json format, load it into a MongoDB database. Then extract it again, transform it with Pandas, and load it to PostgreSQL with a simple model design.
tags:
- Python (Requests)
- Python (Pandas)
- Python (Psycopg2)
- Python (SqlAlchemy)
- PostgreSQL
- MongoDB
- Airflow
repo: https://github.com/fsterrantino/pokemon_api_mongo_db

---

1. [Context](#context)
1. [Objective](#objective)
1. [Description](#description)
1. [Conclusions](#conclusions)
1. [Screenshots](#screenshots)

---

## Context
Project developed in order to use MongoDB features and develop an ETL process.

## Architecture
![Alt Text](/personal-website/assets/images/pokemon_data/architecture.png)

## Objective
Create an ETL process that extracts Pokemons information from an API in a Json format, load it into a MongoDB database. Then extract it again, transform it with Pandas, and load it to PostgreSQL with a simple model design.

## Description
### Extract
The extraction is made from public Pokemon_API endpoints. Retrieving the 151 initial pokemons with their characteristics and attacks information, saved as JSON file.
### Transform
It takes the data from the MongoDB Database and transform it with Pandas library. The main objective is to clean the information, keeping the more significant columns and preparing the information to be loaded in two tables: pokemons (with their main characteristrics), attacks (with the information of attacks in each pokemon generation).
### Load
The data is loaded in the two tables mentioned above. Using SQLAlchemy.
### Validations
In order to verify the data is correctly loaded the two final tasks of the dag retrieves a query to both databases, Postgre and MongoDB.