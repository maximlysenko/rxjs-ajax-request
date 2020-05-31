import {buildRequestUrl, removeCustomKeys, extractHeaders} from "../src/helpers"

test("buildRequestUrl - with no query parameters", () => {
	const url = "https://something.com";

	expect(buildRequestUrl(url)).toEqual(url);
});

test("buildRequestUrl - with query parameters", () => {
	const url = "https://something.com";
	const query = {
		"name": "Max",
		"age": "1",
	};
	const expected = "https://something.com?name=Max&age=1";

	expect(buildRequestUrl(url, query)).toEqual(expected);
});

test("removeCustomKeys - properly removes custom keys", () => {
	const actual = removeCustomKeys({
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

test("extractHeaders - returns empty object if no headers found in options", () => {
	expect(extractHeaders({method: "get"}, false)).toEqual({});
});

test("extractHeaders - returns passed headers if addJson is false", () => {
	const headers = {
		"Authorization": "Bearer",
	};

	expect(extractHeaders({headers}, false)).toEqual(headers);
});

test("extractHeaders - adds accept application/json if addJson is true", () => {
	const headers = {
		"Authorization": "Bearer",
	};

	expect(extractHeaders({headers, body: new FormData()}, true)).toEqual({
		...headers,
		"accept": "application/json",
	});
});

test("extractHeaders - adds accept application/json and content-type if addJson is true and body is string", () => {
	const headers = {
		"Authorization": "Bearer",
	};
	const actual = extractHeaders({headers, body: JSON.stringify({})}, true);
	const expected = {
		...headers,
		"accept": "application/json",
		"content-type": "application/json",
	};

	expect(actual).toEqual(expected);
});

test("extractHeaders - does not override existing accept or content-type headers if addJson is true", () => {
	const headers = {
		"Authorization": "Bearer",
		"Accept": "text/html"
	};
	const actual = extractHeaders({headers}, true);
	const expected = {
		...headers,
		"Accept": "text/html",
	};

	expect(actual).toEqual(expected);
});
