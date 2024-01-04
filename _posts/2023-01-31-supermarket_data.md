---
title: Supermarket Data
layout: post
post-image: /personal-website/assets/images/supermarket_data.png
description: The objective of the project is to be able to measure prices variations of supermarket products.
tags:
- Python (Selenium)
- Python (Pandas)
- Python (Psycopg2)
- Python (SqlAlchemy)
- PostgreSQL
- SQL
repo: https://github.com/fsterrantino/supermarket

---

1. [Context](#context)
1. [Objective](#objective)
1. [Description](#description)
1. [Conclusions](#conclusions)
1. [Screenshots](#screenshots)

---

## Context
Argentina has struggled with various economic issues, including fiscal deficits, currency devaluation, and inconsistent policies. These factors have contributed to a cycle of high inflation rates, eroding the purchasing power of the Argentine peso and impacting the cost of goods and services for consumers.
Inflation can be described as the currency depreciation. This means that with the same amount of money you won't be able to buy the same amount of goods next month. Following this concept, all prices increase almost every week.

## Objective
Accordingly to the described context, the objective of the project it's to be able to track some prices of the economy, and analyze that data to obtain meaningful conclusions such as products with the most significant variations. For that, I chose a well-known supermarket, Jumbo (similar to Wallmart in other countries), in order to track warehouse products prices.

## Description
### Extract
As Jumbo has no public APIs to make easier tracking prices, I had to develop a Selenium web scraper. This component access to the warehouse section and loads a determined number of products pages. Data is collected and inserted into a pandas Dataframe and a 'csv' is generated.
An important aspect to highlight it's that the web page has no products ids, but it load a script in the DOM that has a 'sku' id. So scrapped data is combined with that ids.
### Transform
The main function of this step it's column formatting, adding the datetime and removing possible missing values.
### Load
To add a bit more complexity to the project I decided to create two tables. A Fact table with historic prices, and a Dimension table with the products.
First of all, the script verifies if each product exists in the product table before inserting the records. For this, I used a temporary table that merges with the original one.
After that, prices values are inserted in the prices table if the datetime it's not currently present.

<!-- ## Conclusions

## Screenshots -->