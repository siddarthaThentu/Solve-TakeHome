# ![solve-logo](./solve-logo.png)

# Engineering Take Home Test

## Introduction

Welcome and thank you for taking the time to complete our engineering take home!

There are two sections to this take home with time estimates. Please complete both and keep to the time allotted. If you do not complete a section, add annotations for what you would do if you had had more time. Or if you are unable to complete a section, give us a natural language version of how you would approach the problem. Note that the time limit is mostly out of respect for your time; and you get points for clarity of approach and ability to communicate your problem-solving strategy.

The sections are as follows:

[Front End Section](./FRONT-END.md)

In this section, we ask you to build out a "Spootify" site given some code but with bits left out.

[Back End Section](BACK-END.md)

This section will test your ability to use SQL. Some of the questions are straight-forward and some are fairly open ended. Do what you can in the time that you have.

### Submitting Your Solution

Please send us a link to a repository with your solution or alternately send us your submission as an archive. 

**Please do not submit a pull request or fork our repository.**

Good luck and don't hesitate to reach out with questions to [michael@solve.finance](michael@solve.finance), [keeney@solve.finance](keeney@solve.finance) or [mark@solve.finance](mark@solve.finance).


### My Design Choices

* Since I wanted to load the content when the app mounts, I decided to load data from api's within componentDidMount life cycle method. 
* Using Promise.allSettled(), I tried to parallelize the api requests and log any errors. The benefit with this approach is that even if an api call fails, the content from other api calls can be rendered on to the app.

![image](https://user-images.githubusercontent.com/55814855/131261278-a2becbae-16c9-4ea6-b7ac-9877ec5ffcb8.png)

* Proof of rendered content

![image](https://user-images.githubusercontent.com/55814855/131261422-bade3e9c-ecd4-44cd-a664-5cd170a3afe8.png)

* Auth Flow - I went along with Spotify's client-credentials auth flow. The flow starts with sending a post request with client and client-secret keys and receiving a token. This token is then used during further get api calls.

![image](https://user-images.githubusercontent.com/55814855/131261449-5584ed8d-dff2-41b0-8e84-ffb9cb7e7c1d.png)

- Api's utilized
  - New Releases - https://api.spotify.com/v1/browse/new-releases
  - Featured Playlists - https://api.spotify.com/v1/browse/featured-playlists
  - Browse Categories - https://api.spotify.com/v1/browse/categories


