# YT_Clone

Cloud Storage will store the raw and processed videos uploaded by users.
Pub/Sub will send messages to the video processing service.
Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
Cloud Firestore will store the metadata for the videos.
Cloud Run will host a Next.js app, which will serve as the Youtube web client.
The Next.js app will make API calls to Firebase Functions.
Firebase Functions will fetch videos from Cloud Firestore and return them.
