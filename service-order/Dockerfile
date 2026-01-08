FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
COPY . .
RUN apk add --no-cache curl
EXPOSE 3002
CMD ["node", "index.js"]
