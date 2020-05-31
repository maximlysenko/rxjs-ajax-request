import { stringify } from "querystring";
import { AjaxRequest } from "rxjs/ajax";
import { RequestOptions, StringKeyValue } from "./models";

function asQueryString(parameters?: StringKeyValue): string {
  if (!parameters || Object.keys(parameters).length === 0) return "";

  return `?${stringify(parameters)}`;
}

export function buildRequestUrl(
  path: string,
  searchParameters?: StringKeyValue
): string {
  return `${path}${asQueryString(searchParameters)}`;
}

export function removeCustomKeys(options: RequestOptions): AjaxRequest {
  const requestOptions: AjaxRequest = {};

  for (const key in options) {
    if (key === "search" || key === "headers") continue;

    requestOptions[key as keyof AjaxRequest] =
      options[key as keyof AjaxRequest];
  }

  return requestOptions;
}

export function extractHeaders(
  options: RequestOptions,
  addAcceptAndContentTypeJSON: boolean
): RequestOptions["headers"] {
  const { headers = {} } = options;

  if (!addAcceptAndContentTypeJSON) return headers;

  const keys = Object.keys(headers).map((key: string) => key.toLowerCase());
  const newHeaders = {...headers};

  if (!keys.includes("accept")) {
    newHeaders["accept"] = "application/json";
  }

  if (!keys.includes("content-type") && typeof options.body === "string") {
    newHeaders["content-type"] = "application/json";
  }

  return newHeaders;
}
