import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Requester, RequesterConfig } from "./models";
import { buildRequestUrl, extractHeaders, removeCustomKeys } from "./helpers";

export default function createRequester(
  config: RequesterConfig = {}
): Requester {
  const mergedConfig = {includeJSONHeaders: true, ...config};

  return {
    request: function (url: string, options = {}): Observable<AjaxResponse> {
      const rUrl = buildRequestUrl(url, options.search);
      const rHeaders = extractHeaders(
        options,
        Boolean(mergedConfig.includeJSONHeaders)
      );
      const ajaxRequest = removeCustomKeys(options);

      if (mergedConfig.log) {
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
