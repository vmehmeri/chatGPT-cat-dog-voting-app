# Cat vs Dog: A ChatGPT Web App
A simple voting web app entirely developed using ChatGPT.

Every single line of code you see here was provided by ChatGPT, along with instructions on how to deploy it on Cloud Run and use Cloud Firestore as a database.

## The web app
This is a simple app developed using NodeJS where users can vote on cats or dogs. The total vote count for each is displayed, and this data is persisted on a database. 

![the web app front page](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/webapp-screenshot.jpg)

To run the app, you will need to set up a Google Cloud account and project, then set up application-default credentials on your local machine (`gcloud auth application-default login`). Then, enable Cloud Firestore API and create a Cloud Firestore (Native mode) instance on your project. Make sure you're working on the right project with `gcloud config set project PROJECT_ID`

Once that is set, build a container using Cloud Build:

```gcloud builds submit --tag gcr.io/PROJECT_ID/cat-dog-voting```

Replacing PROJECT_ID with your Google Cloud project's ID.

To deploy to Cloud Run:

```gcloud run deploy --image gcr.io/PROJECT_ID/cat-dog-voting:latest --platform managed```

## Important things to note
First, some caveats:

1. ChatGPT gives you exactly what you asked for. What that means is that sometimes it will tell you how to update the code to introduce a new feature, but not in a way that guarantees it won't break things elsewhere in the code (in fact, that happened more than once here). That being said, if you then ask to fix whatever it was that it broke, it will offer a fix that is almost always very accurate.
2. ChatGPT will obviously not give you something that follows the best practices in terms of security and everything else you may (or should) care about. Proceed with caution when doing something similar.
3. Some level of human knowledge is important here. Being a developer myself, it's easier for me to construct a prompt that will give me what I want compared to some who doesn't know anything about software development. That bias is probably present here in my prompts. Being able to test the app locally and iterate with ChatGPT to fix issues introduced (see #1) also made a huge difference.

## ChatGPT: The dialogue
The following is the dialogue that generated the code and the instructions to deploy it, in images:

![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/1.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/2.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/3.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/4.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/5.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/6.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/7.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/8.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/9.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/10.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/11.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/12.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/13.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/14.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/15.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/16.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/17.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/18.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/19.jpg)
![alt text](https://raw.githubusercontent.com/vmehmeri/chatGPT-cat-dog-voting-app/main/screenshots/20.jpg)

**Note: the only thing that I've changed was the port the app listens on to 8080 (instead of 3000). I also provided the URLs for the images (cat and dog) myself, although ChatGPT did instruct on where they should go.**

