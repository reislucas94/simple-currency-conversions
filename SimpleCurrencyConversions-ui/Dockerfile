
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm set strict-ssl false
RUN npm install --silent
COPY . /app
RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html