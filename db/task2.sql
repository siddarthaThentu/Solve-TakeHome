-- return a count of drg values (num_drgs) in gmc_2019 that are
-- also in cds and reimburse tables as 'drg_code'
SELECT gmc_2019.drg, count(*) as num_drgs
FROM gmc_2019
INNER JOIN cds 
ON gmc_2019.drg = cds.drg_code
INNER JOIN reimburse ON 
gmc_2019.drg = reimburse.drg_code
GROUP BY gmc_2019.drg
