# Solve Finance Full Stack Engineer Take Home Test

Welcome Candidate and thank you for taking the time to complete the Solve Finance take-home challenge for our full-stack engineer position. 

There are two sections to this take home with time estimates. Please complete both and keep to the time allotted. If you do not complete a section, add annotations for what you would do if you had had more time.

* *Front End* a section on using React (_1.5 hours_)
* *Database*: A section on databases and SQL (_0.5 hours_)

Good luck; and if you have questions, please reach out to us mark@solve.finance.

## Front End Section

You will have 1.5 hours to complete this portion of the assignment. 

### Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently

### Pre-requisites ✅
- Add your Spotify client ID & secret to `config.js`
  - Note. **Never add this type of config to version control. This would usually come from your build server.**

### Requirements 📖
Please build pages with the following:

- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
- Fetch and display *Browse* genres
  - Use the API path `categories`
- Loading state/UI *(optional, current UX is already clean)*

### Think about 💡
- Taking a look at the Spotify API documentation
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

### What's Already Been Done 🏁
- UI/UX for all elements, including previews (mobile responsive)
- A Spotify request helper (`makeRequest.js`)

#### Screenshots 🌄

![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
![screenshot-mobile](https://puu.sh/GwPLS/0bcb566d23.png)


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
| 4 | OR | Oregon | 250 |
| 5 | WY | Wyoming | 150 |

### Your Mission

Please complete the following tasks. If any of the below are ill-defined, take a guess at the best approach to define any missing parts and indicate those assumptions in comments.

#### Task 1 
Please submit the answers in [this file](./db/task1.sql). Please write SQL statements that will:
1. Show each user id with each state name and state code.
2. Return the number of users per state.
3. Return the state with the highest proportion of users.

#### Task 2 (Open Ended)

Fix the SQL in [this file](./db/task2.sql).


