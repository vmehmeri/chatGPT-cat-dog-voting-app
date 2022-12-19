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


## ChatGPT
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

**Note: the only thing that I've changed was the port the app listens on to 8080 (instead of 3000)**