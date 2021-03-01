# Solve Finance Full Stack Engineer Take Home Test

Welcome Candidate and thank you for taking the time to complete the Solve Finance take-home challenge for our full-stack engineer position. 

There are two sections to this take home with time estimates. Please complete both and keep to the time allotted. If you do not complete a section, add annotations for what you would do if you had had more time.

* *Front End* a section on using React (_2 hours_)
* *Database*: A section on databases and SQL (_1/2 hour_)

Once you have completed your solution, you can use the "Submit Challenge" button located in the bottom right hand corner. If you cannot come to a solution within the 2 hours, the code you have at 2 hours will be auto-submitted.

## Front End Section

You will have 2 hours to complete this portion of the assignment. 

The goal of this challenge is to build out a UI and layout found in this image: URL-GOES-HERE

The UI is made up of a main header title and a list of posts that are formatted with Material's Card component. You will need to make an API call to retrieve the posts. To get the posts, use this URL: https://jsonplaceholder.typicode.com/posts.

Here are the strict rules of this challenge...you must:
1) Use the way you see fit to make the API call
2) Only retrieve the first 10 posts that the API gives you.
2) Use Material package to create the layout (an example of bringing in the `<Container/>` component from the library is below)
3) Create components as you feel is best suited for your solution

The rest is up to you! Feel free to be creative once you have an initial solution. "Wow us!"

Resources:
1) API: https://jsonplaceholder.typicode.com/posts
2) React Material Docs: https://material-ui.com/
3) React Docs: https://reactjs.org/docs/getting-started.html

Good luck; and if you have questions, please reach out to us mark@solve.finance.

## Database Section

You will have a half hour to complete this portion of the assigment.

You have two tables in a database:

### ourdata.users

| user_id | name | state |
| ----------- | ----------- | -- |
| 1 | Ella | IL |
| 2 | Albert | OR | 
| 3 | Lucy | ME |
| 4 | Lou | NY |
| 5 | Amy | IA |
| 6 | Owen | ME |
| 7 | Bryce | ME |
| 8 | Clara | NY |
| 9 | Chad | OR |
| 10 | Arny | FL |
| 11 | Bob | FL |


### ourdata.geo

| state_id | st_code | state_name | population |
| ----------- | ----------- | -- | -- |
| 1 | ME | Maine | 100 |
| 2 | NY | New York | 1000 |
| 3 | IA | Iowa | 300 |
| 3 | OR | Oregon | 200 |

### Your Mission

Please complete the following tasks. If any of the below are ill-defined, take a guess at the best approach to define any missing parts and indicate those assumptions in comments.

#### Task 1 
Write SQL [here](db/task1.sql) that will show each user id with each state name and state code.

#### Task 2
Write SQL [here](db/test2.sql) that will return the number of users per state.

#### Task 3 (Open Ended)

Either in comments (i.e. explaining an approach) or in code - whatever you have time for within the time limits indicated above - submit materials [in this folder](./task3) that will fill in missing state information to provide a table view into the proportion of users per state even if state information is not provided in one of the tables listed above. So, for example, the state of Florida is not in the table listed above. We would like Florida to show that that the proportion of users in Florida is zero. Provide these numbers along with all other 50 states using whatever information you can find.

#### Task 4 (Optional)

What are some things you would do to improve this take home?

