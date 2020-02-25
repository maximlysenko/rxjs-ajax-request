# rxjs-ajax-request
[![npm](https://codecov.io/gh/maximlysenko/rxjs-ajax-request/branch/master/graph/badge.svg)](https://www.npmjs.com/package/rxjs-ajax-request)
[![npm](https://circleci.com/gh/maximlysenko/rxjs-ajax-request/tree/master.svg?style=shield)](https://www.npmjs.com/package/rxjs-ajax-request)
[![npm](https://api.codeclimate.com/v1/badges/9a14939e1436d0a0b866/maintainability)](https://www.npmjs.com/package/rxjs-ajax-request)

## Install
`npm i --save rxjs-ajax-request`

or

`yarn add rxjs-ajax-request`

## Usage
```javascript
import createRequester from "rxjs-ajax-request"

const config = {
    log: isDev, // where "isDev" - your boolean indicating dev environment 
};
const requester = createRequester(config);

requester.request("url", {method: "POST"})
```

# License
MIT
