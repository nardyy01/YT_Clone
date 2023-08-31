import express from "express";
import ffmpeg from "fluent-ffmpeg";
import { convertVideo, deleteRawVideo, deleteProcessedVideo, downloadRawVideo, setupDirectories, uploadProcessedVideo } from "./gStorage";

setupDirectories();
const app = express();
app.use(express.json());

app.post("/process-video", async (req, res) => {
    // Get the bucket and filename from the Cloud Pub/Sub message
    let data;
    try {
        const message = Buffer.from(req.body.message.data, 'base64').toString('utf8');
        data = JSON.parse(message);
        if (!data.name) {
            throw new Error("Invalid message payload received.");
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send("Bad Request: Missing Filename.");
    }

    const inputFileName = data.name;
    const outputFileName = `processed-${inputFileName}`;
    const deleteLocalFiles = async () => {
        await Promise.all([
            deleteRawVideo(inputFileName),
            deleteProcessedVideo(outputFileName)
        ]);
    };
    // Download the raw video from Cloud Storage
    await downloadRawVideo(inputFileName);

    // Convert the video to 720p
    try {
        await convertVideo(inputFileName, outputFileName);
    } catch (err) {
        deleteLocalFiles();
        console.error(err);
        return res.status(500).send("Internal Server Error: Video processing failed.");
    }

    // Upload the processed video to Cloud Storage
    await uploadProcessedVideo(outputFileName);

    deleteLocalFiles();

    return res.status(200).send("Processing finished successfully.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(
        `Video processing service listening at http://localhost:${port}`
    );
});
