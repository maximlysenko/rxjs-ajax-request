import {Observable} from "rxjs"
import {AjaxResponse} from "rxjs/ajax"

export type RequestOptions = {
    body?: any
    method?: string
    headers?: { [key: string]: string }
    search?: { [key: string]: any }
    responseType?: string
}

export type RequesterConfig = {
    log?: boolean
}

export type Requester = {
    request(url: string, options?: RequestOptions): Observable<AjaxResponse>
}

export function createRequester(config?: RequesterConfig): Requester

export default createRequester
