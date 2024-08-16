<h1 align="center"> Project 4 </h1> <br>
Utilize Python, SQL, and Tableau to analyze and create visual representations of data.


[Survey Lung Cancer Analysis Tableau](https://public.tableau.com/app/profile/meichel.yoingco/viz/LungCancerSurveyAnalysis/Story1?publish=yes)

## Table of Contents

- [Introduction](#introduction)
- [Analysis](#analysis)
- [References](#references)


## Introduction

The aim of our project is to uncover patterns related to lung cancer and smoking frequency. We’ll look at relationships between smoking, chronic disease, alcohol consumption, anxiety, and other related relationships derived from the data to help predict the likelihood of contracting this debilitating disease. Lung Cancer remains a leading cause of mortality globally. Identifying individuals at risk of contracting is pivotal for preventive interventions. This project will focus on implementing a combination of machine learning techniques along with other technologies we’ve learned throughout the course to analyze a problem and predict an outcome.


## Analysis

### Data Model Implementation
The Python script trains, and evaluates both Logistic Regression and Random Forest models. Before modeling, the dataset is carefully cleaned and preprocessed, including renaming columns, converting categorical values to numerical ones, removing duplicates, and addressing class imbalance using SMOTE. Both models achieved a high classification accuracy of 97%, far exceeding the required 75%, indicating a strong predictive power.

### Data Model Optimization
The script documents the use of resampling techniques like SMOTE and Random OverSampling to address class imbalance. It displays the performance of both models through classification reports and confusion matrices,leading to a better model performance.

### Data Preprocessing and Exploration
After preprocessing, the dataset contained 309 entries with both categorical and numerical variables. Cleaning the data included converting the "gender" column into numerical values and mapping binary variables like "smoking," "yellow_fingers," and "lung_cancer" to 0 and 1. Duplicates were removed, and the dataset was confirmed to have no missing values. A correlation matrix revealed moderate to strong correlations between variables related to respiratory symptoms and lung cancer.

### Visual Analysis
Distribution of Lung Cancer:
- A histogram of lung cancer distribution showed a slight imbalance, with more instances labeled as "No." 

Population and Lung Cancer Cases by Gender and Smoking:
- A bar chart comparing population and lung cancer cases by gender and smoking status revealed that smokers, both male and female, have a higher risk of lung cancer.

Population and Lung Cancer Cases by Gender and Alcohol Consumption:
- Another bar chart illustrated the relationship between gender, alcohol consumption, and lung cancer. Alcohol consumption also appeared to be a contributing factor.

### Modeling and Predictive Analysis
Logistic Regression:
- The model achieved an accuracy of 97% on the test set.

Random Forest:
- The Random Forest model performed similarly, and also achieved a 97% accuracy.

### Conclusion
The predictive models demonstrated high accuracy, revealing insights into the factors strongly contributing to lung cancer. Smoking emerged as a strong predictor, especially among male smokers.


## References
[Xpert Learning Assistant](https://bootcampspot.instructure.com/courses/5057/external_tools/313)

[Data](https://www.kaggle.com/code/sandragracenelson/lung-cancer-prediction)
