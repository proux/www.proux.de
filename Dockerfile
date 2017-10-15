FROM node:8-alpine
MAINTAINER proux UG <info@proux.net>
ENV PORT 8080
WORKDIR /app
COPY . /app
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && npm install && npm run build
EXPOSE 8080
CMD ["npm","start"]
