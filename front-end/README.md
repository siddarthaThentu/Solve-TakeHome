# Spootify Coding Challenge

### Difficulty: Hard | Time required: ~ 30-45 minutes

# Goals/Outcomes
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently

# Pre-requisites
- Add your Spotify client ID & secret to `config.js`
  - Note. **Never add this type of config to version control. This would usually come from your build server.**

# Requirements
- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
- Fetch and display *Browse* genres
  - Use the API path `categories`
- Loading state/UI *(optional, current UX is already clean)*

# Think about
- Taking a look at the Spotify API documentation
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

# What's Already Been Done
- UI/UX for all elements, including previews (mobile responsive)
- A Spotify request helper (`makeRequest.js`)

# Screenshots

![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
![screenshot-mobile](https://puu.sh/GwPLS/0bcb566d23.png)

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
