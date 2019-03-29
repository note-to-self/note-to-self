# Note to Self

**Authors**: [Carmen Perezchica](https://github.com/crperezchica), [marcysilverman](https://github.com/marcysilverman), [Kate Dameron](https://github.com/Katedam), [Lance Merill](https://github.com/zulilu)

**[https://notes-to-self.netlify.com](https://notes-to-self.netlify.com/)**

## Overview

Note to Self is an app that seeks to aid users in their goal to rewire their inner dialogue from negative self-talk to affirmative new habits. Users can do this by creating an account and scheduling sms messages to be sent once, daily or weekly. Users can view their own scheduled affirmations as well as see anonymous affirmations by other users on the community page.

## Technologies used

[React.js](https://reactjs.org/), [redux](https://redux.js.org/), [Auth0](https://auth0.com)

## Application Structure

    .
    ├── src                      # Application
      actions
      reducers
      selectors
      components
      containers
      services
    ├── test                     # Unit and E2E tests
    ├── seed.js                  # Load seed data to MongoDB
    ├── server.js                # Run Express server
    ├── LICENSE
    └── README.md

## Getting Started

1. Clone and download [GitHub repo](https://github.com/note-to-self/note-to-self-client)
1. Install dependencies:\
   `npm i`

1. Run scripts:\
   `npm run lint`\
   `npm run pretest`\
   `npm run test`\
   `npm run test:watch`\
   `npm run start` (start node server)\
   `npm run start:watch` (start nodemon server)\
   `npm run seed` (seed database)\
   `npm run drop` (drop MongoDB)\
   `npm run db-load-all` (drop db and load seed data from scratch)

## License

Standard [MIT](/LICENSE.md)

## Acknowledgements

Thanks to [Ryan Mehta](https://github.com/mehtaphysical) for his guidance and consulting.
