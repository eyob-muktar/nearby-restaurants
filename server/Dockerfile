FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm
COPY package*.json ./

RUN pnpm install
RUN npm install -g prisma

COPY . .

EXPOSE 4000

CMD [ "sh", "startup.sh"]
