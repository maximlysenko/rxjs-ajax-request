import { Observable } from "rxjs";
import { AjaxRequest, AjaxResponse } from "rxjs/ajax";

export type StringKeyValue = {
  [key: string]: string;
};

export type RequestOptions = AjaxRequest & {
  search?: StringKeyValue;
  headers?: StringKeyValue;
};

export type RequesterConfig = {
  log?: boolean;
  includeJSONHeaders?: boolean;
};

export type Requester = {
  request(url: string, options?: RequestOptions): Observable<AjaxResponse>;
};
