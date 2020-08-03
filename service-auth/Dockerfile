# Build service
FROM node:12.16.2-alpine3.10 as builder
MAINTAINER "Ezequiel Vega<vegaezequiel51@gmail.com>"
WORKDIR /builder_service
COPY package*.json .
RUN 
RUN npm install && \
  npm run build && \
  rm -r src/ && \
  rm tsconfig.json && \
  rm -r node_modules

# Create service
FROM node:12.16.2-alpine3.10
MAINTAINER "Ezequiel Vega<vegaezequiel51@gmail.com>"
WORKDIR /service
COPY --from=builder /builder_service .
RUN npm install --only=production
CMD ["npm", "start"]
