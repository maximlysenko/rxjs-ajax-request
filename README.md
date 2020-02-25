# rxjs-ajax-request
Simple utility for ajax requests that uses rxjs/ajax. Suitable only if you use rxjs in your project.

[![npm](https://codecov.io/gh/maximlysenko/rxjs-ajax-request/branch/master/graph/badge.svg)](https://www.npmjs.com/package/rxjs-ajax-request)
[![npm](https://circleci.com/gh/maximlysenko/rxjs-ajax-request/tree/master.svg?style=shield)](https://www.npmjs.com/package/rxjs-ajax-request)

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
