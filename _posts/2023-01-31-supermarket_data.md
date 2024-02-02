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
1. [Architecture](#architecture)
1. [Screenshots sample](#screenshots sample)
1. [Description](#description)
1. [Conclusions](#conclusions)
1. [Screenshots](#screenshots)

---

## Context
Argentina has struggled with various economic issues, including fiscal deficits, currency devaluation, and inconsistent policies. These factors have contributed to a cycle of high inflation rates, eroding the purchasing power of the Argentine peso and impacting the cost of goods and services for consumers.
Inflation can be described as the currency depreciation. This means that with the same amount of money you won't be able to buy the same amount of goods next month. Following this concept, all prices increase almost every week.

## Architecture
![Alt Text](/personal-website/assets/images/supermarket_project/architecture.png)

## Screenshots sample
Look for Screenshots section in order to see the full execution.
### Scrapped page
![Alt Text](/personal-website/assets/images/stocsupermarket_projectks_data/Screenshots/screenshot_1.jpg)
### Scrapping logs
![Alt Text](/personal-website/assets/images/supermarket_project/Screenshots/screenshot_2.jpg)
### Transformed dataset
![Alt Text](/personal-website/assets/images/supermarket_project/Screenshots/screenshot_3.jpg)
### Loaded Data
![Alt Text](/personal-website/assets/images/supermarket_project/Screenshots/screenshot_4.jpg)
### Analyzed Data - Top 10 % price increase
![Alt Text](/personal-website/assets/images/supermarket_project/Screenshots/screenshot_5.jpg)

## Objective
Accordingly to the described context, the objective of the project it's to be able to track some prices of the economy and analyze that data to obtain meaningful conclusions such as products with the most significant variations. For that, I chose a well-known supermarket, Jumbo (similar to Wallmart in other countries), in order to track warehouse products prices.

## Description
### Extract
As Jumbo has no public APIs to make easier tracking prices, I had to develop a Selenium web scraper. This component access to the warehouse section and loads a determined number of products pages. Data is collected and inserted into a pandas Dataframe and a 'csv' is generated.
An important aspect to highlight it's that the web page has no products ids, but it loads a script in the DOM that has the 'sku' id. So scrapped data is combined with that ids.
Another difficulty of the extraction it's related to the dynamically products load. The page it's not completed until it's scrolled down to the botton, so this step was added in order to ensure a complete retrieve.
### Transform
The main function of this step it's column formatting, adapting the data to the simple Dimensional Model established, adding the datetime and removing possible missing values.
### Load
To add a bit more complexity to the project I decided to create two tables. A Fact table with historical prices, and a Dimension table with the products.
First of all, the script verifies if each product exists in the product table before inserting the records. For this, I used a temporary table that merges with the original one.
After that, prices values are inserted in the prices table if the datetime it's not currently present.

## Conclusions
As showed in the screenshots section, it were identified products with over 200% in only 37 days. This numbers are not surprise since to the recent goverment change and taking into account that January inflation values (approx. 25%) is the highest value in the last years.

## Screenshots
Showcase of some steps of the execution analysing some significant actions.
[Download PDF](/personal-website/assets/images/supermarket_project/Screenshots/Screenshots.pdf)