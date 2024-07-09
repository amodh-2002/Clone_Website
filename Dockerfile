# Use Node.js Alpine base image
FROM node:alpine AS build

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install --production

# Copy the entire codebase to the working directory
COPY . /app/

# Build the React Vite project
RUN npm run build

# Use Node.js Alpine base image for the production image
FROM node:alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy only the built artifacts from the previous stage
COPY --from=build /app/build /app

# Expose the port your app runs on (replace <PORT_NUMBER> with your app's actual port)
EXPOSE 3000

# Define the command to start your application
CMD ["npx", "serve", "-s", "-l", "3000", "/app"]
