FROM node:12.14.1 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
##RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm install --silent
RUN npm run build

# production environment
FROM nginx:1.19.6-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
