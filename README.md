# Store Front End

Front end application that allows users to

-   Log into their account
-   Create a new account
-   View and filter a list of mens and womens products
-   View a product and add it to their basket
-   View their basket
-   Update the quantity of a product and remove it from their basket

## Installation

1. Clone the project

```shell
https://github.com/Nathan-Pimlott/store-fe.git
```

2. Install dependencies

```shell
npm install
```

### Setup local data

This UI and it's API rely on some test data (mock data will be added in the future).

1. Run the commands in `setup.sql` to create some basic data for the UI.

## Run locally

1. Clone the projects API

```shell
https://github.com/Nathan-Pimlott/store-api
```

2. Follow `Installation` to install dependencies

3. Start the API development server

```shell
npm run dev
```

## Run unit tests

1. Follow `Installation` to install dependencies.

2. Run the tests

```shell
npm run test:unit
```

### Run functional tests

1. Follow `Installation` to install dependencies.

2. Run the tests

```shell
npm run test:functional
```
