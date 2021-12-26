FROM node:14.15-slim

WORKDIR /gelsin-app
COPY app/ .

ENV DB_HOST=localhost
ENV DB_PORT=27017
ENV DB_NAME=gelsin-app
ENV DB_CONNECT_URL=mongodb+srv://gkandemir:gelsinApp123@gelsin-app.waa8d.mongodb.net/gelsin-app?retryWrites=true&w=majority
ENV PORT=3000
ENV PASSWORD_HASH=de7cc29eb493f03c915a960b195ba9194f7a49c35d846422741176c6a9e64f75
ENV ACCESS_TOKEN_SECRET_KEY=ba9194f7a49c35d846422741176c6a9e64f75de7cc29eb49de7cc29eb493f03c194f7a49c35d84
ENV REFRESH_TOKEN_SECRET_KEY=741176c6a9e64f75de7cc29eb49de7cc29eb493f03c194f7a49c35d8475de7cc29eb49
ENV EMAIL_HOST=smtp.gmail.com
ENV EMAIL_PORT=587
ENV EMAIL_USER=kablosuzkedi.mailer@gmail.com
ENV EMAIL_PASSWORD=email_password
ENV EMAIL_FROM=GelsinApplicationSystem
ENV NODE_ENV=production

EXPOSE 3000

RUN npm install
CMD ["npm", "start"]