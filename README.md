<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1827/1827295.png" width="200" alt="Notifications" />
</p>

  <p align="center">A notification service built using <a href="http://nestjs.com" target="_blank">NestJS</a> framework.</p>

## Description

This notification service project was developed on Rocketseat's Ignite Lab using NestJS, Prisma, Class Validation, Jest & several other concepts.

## Features

### Routes

`POST /notifications`
`GET /notifications/count/from/:recipientId`
`GET /notifications/from/:recipientId`
`PATCH /notifications/:id/cancel`
`PATCH /notifications/:id/read`
`PATCH /notifications/:id/unread`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Credits

- Author: [Lucas Hames](https://github.com/wedz0ff)
- Distributed under [MIT License](LICENSE)
