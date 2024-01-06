# Etapa de construcción
FROM node:lts AS build
RUN npm install -g pnpm
WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build

# Etapa de producción
FROM node:lts AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

RUN pnpm install --only=prod

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]