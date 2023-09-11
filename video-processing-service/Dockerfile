# Use an offical Node runtime as a parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install ffmpeg in the container
RUN apt-get update && apt-get install -y ffmpeg

# Install any needed packages specified in pack
RUN npm install

# Google Cloud
# RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg  add - && apt-get update -y && apt-get install google-cloud-cli -y

# Copy app source inside the docker image
COPY . .

# Make port 3000 available outside this container
EXPOSE 3000

# Define the command to run your app using CMD (only one CMD allowed)
CMD [ "npm", "start" ]
