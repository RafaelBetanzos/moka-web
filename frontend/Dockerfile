FROM node:lts AS runtime

ARG VITE_BASE_MOKA_URL=https://cms.moka.bio
ENV VITE_BASE_MOKA_URL=https://cms.moka.bio

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
