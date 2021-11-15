# Frontend startcode for 3rd semester

### Preconditions
*You should have node.js installed and an IDE like Visual Studio Code*
- [Node JS](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Setup the project

After having cloned the project and ran `npm install`, you should change the **URL** in **settings.js**

- Then you can run `npm start` to start a live preview of your project
- And then you are ready to code

### Deployment
*There are two methods on how to deploy your project*

#### The easy methode/Surge.sh
*This method is the easiest, but it won't use your own domain name*

- To get started with deploying your project with surge
- Start by running the command `npm run build` inside your project folder
- Then run `npm install surge` or if you are on a Linux/Mac system do `sudo npm install surge`
- After having installed surge, run this command: `surge --project ./build --domain A_DOMAIN_NAME.surge.sh`
- The *A_DOMAIN_NAME* part of the command needs to change to whatever domain name you want

#### The hard method
*This method is to deploy your project on your own domain name*
- [Use this link](https://docs.google.com/document/d/1KoqM54djkwAXpLDEb6wF3YoMjkkyYkxdtG4I43Dgf3w/edit)
