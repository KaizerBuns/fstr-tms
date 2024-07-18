# ---- Base Node ----
FROM node:erbium-slim AS base
WORKDIR /app
# Copy package.json first and run NPM INSTALL to cache it, avoids re-running it everytime there is code change.
COPY package.json .
COPY package-lock.json .
ENV NPM_CONFIG_LOGLEVEL warn
# 15% faster than npm install
RUN npm install --prefer-offline --no-audit --progress=false

# ---- Build stage ----

FROM base AS build
WORKDIR /app
COPY . .
RUN npm run build
RUN rm -rf node_modules

# --- Release with Alpine ----
FROM keymetrics/pm2:latest-alpine as release
WORKDIR /app
ENV PORT 5500
COPY --from=build /app ./
RUN npm config set unsafe-perm true
RUN npm install --prefer-offline --no-audit --progress=false

EXPOSE 5500
CMD [ "pm2-runtime", "start", "pm2.json" ]

# ENTRYPOINT ["/bin/sleep"]
# CMD [ "1000" ]
