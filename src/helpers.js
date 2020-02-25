import querystring from "querystring"

/**
 * @param {Object} [params] - request query parameters object
 *
 * @returns {string}
 */
function getQueryString(params) {
	if (!params || Object.keys(params).length === 0) return ""

	return "?" + querystring.stringify(params)
}

/**
 * @param {string} url - request url
 * @param {Object} [queryParams] - request query parameters object
 *
 * @returns {string}
 */
export function buildFullUrl(url, queryParams) {
	return url + getQueryString(queryParams)
}

/**
 * Returns a new object without previously added custom keys (search, headers),
 * which may not be supported in rxjs/ajax request options
 *
 * @param {Object} options - request options
 *
 * @returns {Object}
 */
export function cleanupOptions(options) {
	const rest = {}

	for (let key in options) {
		if (key === "search" || key === "headers") continue

		rest[key] = options[key]
	}

	return rest
}

/**
 * @param {Object} options - request options
 * @param {boolean} [populateWithDefaults=true] - whether to add default headers for JSON
 *
 * @returns {Object}
 */
export function getHeaders(options, populateWithDefaults = true) {
	const {headers = {}} = options

	if (!populateWithDefaults) return headers

	if (typeof headers["Accept"] === "undefined") {
		headers["Accept"] = "application/json"
	}

	if (typeof headers["Content-Type"] === "undefined" && typeof options.body === "string") {
		headers["Content-Type"] = "application/json"
	}

	return headers
}
