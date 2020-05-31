import createRequester from "../src"

jest.mock("rxjs/ajax", () => ({ajax: jest.fn()}))

describe("createRequester", () => {
	const originalConsole = global.console;

	beforeAll(() => {
		// @ts-ignore
		global.console = {
			log: jest.fn(),
			group: jest.fn(),
			groupEnd: jest.fn(),
		}
	})

	afterAll(() => {
		global.console = originalConsole
	})

	test("createRequester - no config, no logs", () => {
		const requester = createRequester();

		requester.request("http://localhost:3000");

		expect(console.log).not.toHaveBeenCalled();
		expect(console.group).not.toHaveBeenCalled();
		expect(console.groupEnd).not.toHaveBeenCalled();
	});

	test("createRequester - logs request info to console if log=true", () => {
		const requester = createRequester({log: true});
		const url = "http://localhost:3000"
		const options = {
			headers: {
				"Authorization": "Bearer token",
			},
			method: "POST",
		}

		requester.request(url, options)

		expect(console.group).toHaveBeenCalledWith("Ajax Request");
		expect(console.log).toHaveBeenNthCalledWith(1, "url: %s", url);
		expect(console.log).toHaveBeenNthCalledWith(2, "headers:", {
			"Authorization": "Bearer token"
		});
		expect(console.log).toHaveBeenNthCalledWith(3, "options:", {method: "POST"});
		expect(console.groupEnd).toHaveBeenCalled();
	});
});
