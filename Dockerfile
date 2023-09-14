# first stage builds vue
FROM node:18-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
# RUN npm install @vue/cli@latest -g

# start app
CMD ["npm", "run", "dev", "--host"]
