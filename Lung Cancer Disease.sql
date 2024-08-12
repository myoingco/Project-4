-- Create table containing all the features
SELECT * FROM test_survey;

-- Convert gender values of M and F to gender categories of male and female. 
SELECT CASE "GENDER"
           WHEN 'M' THEN 'Male'
           WHEN 'F' THEN 'Female'
           ELSE 'Other'
       END AS gender_description
FROM test_survey;

-- Determine the count of male patients.
SELECT COUNT(*) AS num_male_patients
FROM test_survey
WHERE "GENDER" = 'M';

--Determine the count of female patients.
SELECT COUNT(*) AS num_female_patients
FROM test_survey
WHERE "GENDER" = 'F'; 

-- Determine the sum of lung cancer and no lung cancer female patients.
SELECT 
  CASE 
    WHEN "LUNG_CANCER" = 'YES' THEN 'has lung cancer_female_patients'
    WHEN "LUNG_CANCER" = 'NO' THEN 'does not have lung cancer_female_patients'
  END AS status,
  COUNT(*) AS patients_count
FROM test_survey
WHERE "GENDER" = 'F'
GROUP BY 
  CASE 
    WHEN "LUNG_CANCER" = 'YES' THEN 'has lung cancer_female_patients'
    WHEN "LUNG_CANCER" = 'NO' THEN 'does not have lung cancer_female_patients'
  END;

-- Calculate the average age of all the patients.
SELECT CAST(AVG("AGE") AS INTEGER) AS average_age
FROM test_survey;

-- Determine the alcohol consumption for each gender by count. 
SELECT CASE 
WHEN "GENDER" = 'F' THEN 'women'
WHEN "GENDER" = 'M' THEN 'men'
END AS gender_category, CASE 
WHEN "ALCOHOL CONSUMING" = 1 THEN 'No'
WHEN "ALCOHOL CONSUMING" = 2 THEN 'Yes'
END AS "ALCOHOL CONSUMING_category",
COUNT(*) AS count
FROM test_survey
GROUP BY GENDER_category, "ALCOHOL CONSUMING_category";

-- Determine the total number and percentage of men and women who smoke.
SELECT CASE 
WHEN "GENDER" = 'F' THEN 'women'
WHEN "GENDER" = 'M' THEN 'men'
END AS GENDER_category,
COUNT(*) AS total_count,
SUM(CASE WHEN "SMOKING" = 2 THEN 2 ELSE 0 END) AS SMOKING_count,
ROUND((SUM(CASE WHEN "SMOKING" = 2 THEN 2 ELSE 0 END) * 100.0) / COUNT(*), 2) AS SMOKING_percentage
FROM test_survey
GROUP BY GENDER_category;

-- Determine which gender has the highest occurence of lung cancer.
SELECT 
  CASE 
    WHEN "GENDER" = 'F' THEN 'Female'
    WHEN "GENDER" = 'M' THEN 'Male'
  END AS gender_category,
  SUM(CASE WHEN "LUNG_CANCER" = 'YES' THEN 1 ELSE 0 END) AS number_lung_cancer_cases
FROM test_survey
GROUP BY "GENDER"
ORDER BY number_lung_cancer_cases DESC
LIMIT 1;







