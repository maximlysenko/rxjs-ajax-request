# rxjs-ajax-request
[![npm](https://codecov.io/gh/maximlysenko/rxjs-ajax-request/branch/master/graph/badge.svg)](https://www.npmjs.com/package/rxjs-ajax-request)
[![npm](https://circleci.com/gh/maximlysenko/rxjs-ajax-request/tree/master.svg?style=shield)](https://www.npmjs.com/package/rxjs-ajax-request)
[![npm](https://api.codeclimate.com/v1/badges/9a14939e1436d0a0b866/maintainability)](https://www.npmjs.com/package/rxjs-ajax-request)

## Install
`npm i -S rxjs-ajax-request`

or

`yarn add rxjs-ajax-request`

## Usage
```typescript
import createRequester from "rxjs-ajax-request"

const requester = createRequester({
    log?: isDev, // where "isDev" - your boolean indicating dev environment 
    includeJSONHeaders?: true,
});

requester.request("https://example.com", {method: "POST", search: {name: "world", age: 1}});
// Produces https://example.com?name=world&age=1
```

# License
MIT
