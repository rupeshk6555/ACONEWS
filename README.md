
## Installation
1. Clone the repository:


```bash
  https://github.com/rupeshk6555/ACONEWS
```

    
2.Navigate to the project directory:
```bash
cd ACONEWS

```
3. Install dependencies:
```bash
npm install
```

4. Run project
```bash
 npm run dev
```
## Overview of approach
the ACONEWS project was structured around three key areas: API integration, user interface design, and deployment.

  #### 1. API Integration: 
  I began by connecting to the GNews API to fetch live news data, ensuring efficient usage within the limits of the free tier. I prioritized handling data properly while managing rate limits.

#### 2. Frontend Design:
 The UI was designed to be clean, responsive, and user-friendly, working seamlessly across mobile, tablet, and desktop devices. I implemented a full-screen mobile menu and used pagination to display articles smoothly.

#### 3. Deployment: 
After completing the build, I deployed the app on Firebase's free tier, making it easy to access and maintain. The focus was on speed, reliability, and ease of use.


## Description

 During the development of ACONEWS, I faced a few key challenges:

 #### 1. API Rate Limits:
 The GNews API's free tier had strict rate limits, which restricted the number of requests I could make. To overcome this, I optimized API calls by only fetching new data when necessary and implemented pagination to load articles in smaller batches, reducing the overall API requests.

#### 2. Responsive Design:
 Ensuring the app worked well across mobile, tablet, and desktop devices was another challenge. I tackled this by using flexible layouts, media queries, and a full-screen mobile menu for smooth navigation on smaller screens.

#### 3. Firebase Deployment: 
While Firebase is straightforward, I had to carefully manage the deployment process, especially ensuring all configurations were set correctly for smooth app hosting. Careful attention to deployment settings helped overcome this.
