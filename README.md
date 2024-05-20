# React/Next.js Template

[See Live Demo of this Template](https://drt-next-js-template.netlify.app/)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# This is the name of my Project  [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

Here I am putting an overview of what my project is about. It comes below the name of my project so that others can read what it is about and get more details.

[View App](#your-link)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a teacher
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#your-link)
- [Wireframes] https://docs.google.com/presentation/d/1dpxeQzmib42BmvDqdywn-r5aABlPVjSdy3TPu7vpkUU/edit?usp=sharing
- [Project Board] https://github.com/users/rossm933/projects/3/views/1
- [ERD] https://dbdiagram.io/d/CAPSTONE-FE-6642a0d69e85a46d55c05b9a

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [YOUR NAME](https://github.com/your-github-url)
