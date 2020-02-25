import {ajax} from "rxjs/ajax"
import {buildFullUrl, cleanupOptions, getHeaders} from "./helpers"

/**
 * Creates object that has "request" function to make ajax requests with the Observable return type.
 *
 * @param {Object} [config={}] - configuration object
 * @param {boolean} [config.log] - whether to console log request details (use in DEV only)
 *
 * @returns {{request: (function(string, Object): Observable<AjaxResponse>)}}
 */
function createRequester(config = {}) {
	return {
		/**
		 * @param {string} url - request url
		 * @param {Object} [options={}] - request options
		 * @param {string} [options.method="GET"] - request method ("GET", "POST", etc.)
		 * @param {any} [options.body] - request body
		 * @param {Object} [options.headers={}] - request headers
		 * @param {Object} [options.search={}] - request query parameters
		 * @param {string} [options.responseType="json"] - rxjs/ajax responseType
		 *
		 * @returns {Observable<AjaxResponse>}
		 */
		request: function (url, options = {}) {
			if (!url) {
				throw new Error("No request url provided")
			}

			const rUrl = buildFullUrl(url, options.search)
			const rHeaders = getHeaders(options)
			const rest = cleanupOptions(options)

			if (config.log) {
				console.group("Ajax Request")
				console.log("url: %s", rUrl)
				console.log("headers:", rHeaders)
				console.log("options:", rest)
				console.groupEnd()
			}

			return ajax({
				url: rUrl,
				...rest,
				headers: rHeaders,
			})
		},
	}
}

export default createRequester
