# Production(Frontend)

# React Build
FROM node:alpine as build
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
RUN npm run build

# HTTP Server
FROM nginx
COPY --from=build /app/build/ /usr/share/nginx/html/
EXPOSE 80