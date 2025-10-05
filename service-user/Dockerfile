FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .       
RUN apk add --no-cache curl      
EXPOSE 3001
CMD ["node", "index.js"]
