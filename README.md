# YT_Clone


1. Cloud Storage will store the raw and processed videos uploaded by users.

2. Pub/Sub will send messages to the video processing service.

3. Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.

4. Cloud Firestore will store the metadata for the videos.

5. Cloud Run will host a Next.js app, which will serve as the Youtube web client.

6. The Next.js app will make API calls to Firebase Functions.

7. Firebase Functions will fetch videos from Cloud Firestore and return them.


Video Storage (Cloud Storage)
Google Cloud Storage will be used to host the raw and processed videos. This is a simple, scalable, and cost effective solution for storing and serving large files.

Video Upload Events (Cloud Pub/Sub)
When a video is uploaded, we will publish a message to a Cloud Pub/Sub topic. This will allow us to add a durability layer for video upload events and process videos asynchronously.

Video Processing Workers (Cloud Run)
When a video upload event is published, a video processing worker will receive a message from Pub/Sub and transcode the video. For transcoding the video we will use ffmpeg, which is a popular open source tool for video processing and it's widely used in industry (including at YouTube).

The nature of video processing can lead to inconsistent workloads, so we will use Cloud Run to scale up and down as needed. Processed videos will be uploaded back to Cloud Storage.

Video Metadata (Firestore)
After a video is processed, we will store the metadata in Firestore. This will allow us to display processed videos in the web client along with other relevant info (e.g. title, description, etc).

Video API (Firebase Functions)
We will use Firebase Functions to build a simple API that will allow users to upload videos and retrieve video metadata. This can easily be extended to support additional Create, Read, Update, Delete (CRUD) operations.

Web Client (Next.js / Cloud Run)
We will use Next.js to build a simple web client that will allow users to sign in and upload videos. The web client will be hosted on Cloud Run.

Authentication (Firebase Auth)
We will use Firebase Auth to handle user authentication. This will allow us to easily integrate with Google Sign In.
