FROM node
RUN mkdir /app
ENV PORT 8080
WORKDIR /app
ADD . /app
RUN cd /app && npm install && npm run build
EXPOSE 8080
CMD ["npm","start"]