# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 (assuming your Next.js app runs on port 3000)
EXPOSE 3000

# Define the command to run your application in development mode
CMD ["npm", "run", "dev"]
