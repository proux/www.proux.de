FROM node:7
MAINTAINER proux UG <info@proux.net>
ENV PORT 8080
WORKDIR /app
COPY . /app
RUN npm install && npm run build
EXPOSE 8080
CMD ["npm","start"]
