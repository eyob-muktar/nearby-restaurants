# Nearby Restaurants

This project is a full-stack application with a Next.js client and a Node.js server that list restaurants around user location. You can run the app locally using Docker Compose or manually set it up using `pnpm` or any other Node package manager.

## Prerequisite

Before you start, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) (if running with Docker Compose)
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/)(or any other package manager) (if running manually)
- [Google Maps Api Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Run Locally with docker compose

Clone the project

```bash
  git clone https://github.com/eyob-muktar/nearby-restaurants.git
```

Go to the project directory

```bash
  cd nearby-restaurants
```

Add env variables

Run the application

```bash
  docker compose up --build
```

Open your browser and visit http://localhost:3000

To stop the application

```bash
  docker-compose down
```

## Run Locally without docker

Clone the project

```bash
  git clone https://github.com/eyob-muktar/nearby-restaurants.git
```

Go to the project directory

```bash
  cd nearby-restaurants
```

Install dependencies

```bash
# Navigate to the client folder and install dependencies

  cd client
  pnpm install
```

```bash
# Navigate to the server folder and install dependencies

  cd server
  pnpm install
```

Start the application

```bash
# start the client

  cd client
  pnpm run start
```

```bash
# start the server
# Make sure you have a postgres database running
# Add the database url in server/.env file
  cd server
  pnpm run start
```

Open your browser and visit http://localhost:3000

To stop the application

```bash
  docker-compose down
```
