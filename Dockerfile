# First stage build
FROM node:20-alpine3.19 as build-stage

# Set working directory
WORKDIR /src/app

# Copy package.json and package-lock.json (for npm ci)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Second stage build
FROM nginx:alpine

# Copy build files to nginx
COPY --from=build-stage /src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
