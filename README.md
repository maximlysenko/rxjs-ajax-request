# rxjs-ajax-request
Simple utility for ajax requests that uses rxjs/ajax.

## Usage
```
import createRequester from "rxjs-ajax-request"

const config = {
    log: __DEV__,
};
const requester = createRequester(config);

requester.request("url", {method: "POST"})
```
