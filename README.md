# rxjs-ajax-request
Simple utility for ajax requests that uses rxjs/ajax. Suitable only if you use rxjs in your project.

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
