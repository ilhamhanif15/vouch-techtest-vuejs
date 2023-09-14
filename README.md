# Date of submission
15 September 2023

# Installation Guide
There are 2 Repository one for Backend and the other one for Frontend

Repository for Backend :
https://github.com/ilhamhanif15/vouch-techtest-nodejs
```
git clone https://github.com/ilhamhanif15/vouch-techtest-nodejs.git
cd vouch-techtest-nodejs
docker-compose up --build -d
```
========================================================================

Repository for Frontend :
https://github.com/ilhamhanif15/vouch-techtest-vuejs
```
git clone https://github.com/ilhamhanif15/vouch-techtest-vuejs.git
cd vouch-techtest-vuejs
docker-compose up --build -d
```
After the docker build complete, you can access in browser : Now you can access to http://127.0.0.1:8000/join-room

---

# Time Spent
Around 16 hours

# Assumptions
- The created room will keep the chat history, and it cannot be deleted

# Shortcuts/Compromises made
- I think it's about the clustering socket connection

# What would be your approach to ensuring the application is ready for production (testing)?
- Testing scenarios 
- Run Unit Testing

# How would you ensure a smooth user experience as 1000’s of users start using your app simultaneously?
- maybe add load balancer and cache like redis, also have a strategy in storing the data to the database and assumption we using socket, maybe we can optimize from the connection that made for every client connections

# What key steps would you take to ensure application security?
- avoid IDORS
- ensuring safe query syntax to database, for example when we want to query using raw syntax, we need to ensure the request value that want to used in the query, so we can avoid SQL Injection

# What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.
- I want to add the auth using jwt token when user joined the room, so when the user refresh the browser or revisit the page, it can be use the auth token for identify the current user

# Your feedback on this technical challenge
- Currently i dont have any feedback, this technical challenge so far for me it's the most appropriate because it's not that big and not that small