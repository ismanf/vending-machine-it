# vending-machine-it

Install all dependencies:

`npm i`

*You may need to install `nps` module globally*

`npm i -g nps`

To run tests:

`nps test`

To run `getInitialBalance` lambda:

`nps getBalance`

To run `calculateChange` lambda change `amount` in `serverless.mock.json` file and run:

`nps calculateChange`

Opend `index.html` in browser to interact with endpoints.

#### What could not have time to accomplish:
 - Host ui
 - Dynamo db integration for centralized data source
 - Good amount of unit tests
 - Integration and e2e tests
 - Deploying with dockers


