--- Please write SQL statements after the appropriate numbered lines below:

-- 1.
select users.user_id, users.state as state_code, geo.state_name from users left join geo on users.state=geo.st_code;
-- Assuming that the location details of every user needs to be displayed. This can help in fixing missing data.

-- 2.
select state, count(*) as "Number of Users" from users group by state;
--Assuming the state codes from users table as representation of states since it has more data about states than geo table.

-- 3.
select state,sum(proportion) as proportion from 
(select users.state,1/cast(geo.population as decimal(7,2)) as proportion from users 
inner join 
geo on users.state=geo.st_code) as sub 
group by state 
order by proportion desc 
limit 1;