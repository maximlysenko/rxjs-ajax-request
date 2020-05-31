import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Requester, RequesterConfig } from "./models";
import { buildRequestUrl, extractHeaders, removeCustomKeys } from "./helpers";

export default function createRequester(
  config: RequesterConfig = { includeJSONHeaders: true }
): Requester {
  return {
    request: function (url: string, options = {}): Observable<AjaxResponse> {
      const rUrl = buildRequestUrl(url, options.search);
      const rHeaders = extractHeaders(
        options,
        Boolean(config.includeJSONHeaders)
      );
      const ajaxRequest = removeCustomKeys(options);

      if (config.log) {
        console.group("Ajax Request");
        console.log("url: %s", rUrl);
        console.log("headers:", rHeaders);
        console.log("options:", ajaxRequest);
        console.groupEnd();
      }

      return ajax({
        url: rUrl,
        headers: rHeaders,
        ...ajaxRequest,
      });
    },
  };
}
