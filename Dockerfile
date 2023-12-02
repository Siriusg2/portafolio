FROM node:lts AS runtime
RUN npm i -g pnpm
WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build
RUN pnpm astro add node -y

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD [ "pnpm", "run", "dev" ]