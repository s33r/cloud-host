FROM nginx:alpine

# Install latest node lts
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
    && apk add --no-cache --update-cache --update --repository http://dl-cdn.alpinelinux.org/alpine/edge/main nodejs \
    && echo "NodeJS Version:" "$(node -v)" \
