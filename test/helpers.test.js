import {buildFullUrl, cleanupOptions, getHeaders} from "../src/helpers"

test("buildFullUrl - with no query parameters", () => {
	const url = "https://something.com"

	expect(buildFullUrl(url)).toEqual(url)
});

test("buildFullUrl - with query parameters", () => {
	const url = "https://something.com"
	const query = {
		"name": "Max",
		"age": "1",
	}
	const expected = "https://something.com?name=Max&age=1"

	expect(buildFullUrl(url, query)).toEqual(expected)
});

test("cleanupOptions - properly removes custom keys", () => {
	const actual = cleanupOptions({
		method: "POST",
		search: {
			"name": "Max",
		},
		headers: {
			"Authorization": "Bearer token",
		},
	})

	expect(actual).toEqual({method: "POST"});
});

test("getHeaders - adds default 'Accept' header with no body passed", () => {
	const actual = getHeaders({})

	expect(actual).toEqual({
		"Accept": "application/json",
	})
});

test("getHeaders - adds default 'Accept' and 'Content-Type' headers", () => {
	const actual = getHeaders({body: JSON.stringify({})})

	expect(actual).toEqual({
		"Accept": "application/json",
		"Content-Type": "application/json",
	})
});

test("getHeaders - doesn't add any headers if false passed", () => {
	const actual = getHeaders({}, false)

	expect(actual).toEqual({})
});

test("getHeaders - doesn't overwrite already existing 'Accept' header", () => {
	const actual = getHeaders({
		headers: {
			"Accept": "application/octet-stream",
		},
	})

	expect(actual).toEqual({
		"Accept": "application/octet-stream",
	})
});
