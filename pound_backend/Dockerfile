# ビルドステージ
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn prisma generate
RUN yarn build

# 実行ステージ
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json yarn.lock ./

EXPOSE 3000
CMD ["yarn", "start:prod"]