---
title: Redfin data
layout: post
post-image: /personal-website/assets/images/redfin_data.png
description: Simple ETL project using AWS (EMR, EC2, S3) with PySpark.
tags:
- AWS
- EC2
- EMR
- PySpark
- S3
repo: Not available

---

1. [Architecture](#architecture)
1. [Objective](#objective)
1. [Description](#description)
1. [Screenshots sample](#screenshots sample)
1. [Screenshots](#screenshots)

---

## Architecture
![Alt Text](/personal-website/assets/images/redfin_data/architecture.jpg)

## Objective
The objective of the project was to configure AWS in order to be able to use a PySpark instance into a EC2 container to extract information from an API to S3, and then transform the data to upload it finally to different S3 bucket.

## Description
The project was made completely from scratch, following these steps:
1. Create IAM User with Administrator access.
2. Create two buckets: Raw and Transformed.
3. Create VPC.
4. Create EMR/EC2 Cluster.
5. Create EMR Studio and Workspace.
6. Attach Notebook to EMR cluster.
7. Write and run Pyspark script.

## Screenshots sample
<br>
S3 Buckets
<br>
![Alt Text](/personal-website/assets/images/redfin_data/Screenshots/1_S3_buckets.jpg)
<br>
<br>
PySpark notebook:
<br>
![Alt Text](/personal-website/assets/images/redfin_data/Screenshots/2_Pyspark_notebook.jpg)
<br>
<br>
S3 Raw data:
<br>
![Alt Text](/personal-website/assets/images/redfin_data/Screenshots/3_S3_raw_data.jpg)
<br>
<br>
S3 Transformed data:
<br>
![Alt Text](/personal-website/assets/images/redfin_data/Screenshots/4_S3_transformed_data.jpg)

## Screenshots
Showcase of some steps of the execution:
[Download PDF](/personal-website/assets/images/redfin_data/Screenshots.pdf)
