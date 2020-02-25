import createRequester from "../src/createRequester"

jest.mock("rxjs/ajax", () => ({ajax: jest.fn()}))

describe("createRequester", () => {
	const originalConsole = global.console;

	beforeAll(() => {
		global.console = {
			log: jest.fn(),
			group: jest.fn(),
			groupEnd: jest.fn(),
		}
	})

	afterAll(() => {
		global.console = originalConsole
	})

	test("createRequester - throw if empty url", () => {
		const requester = createRequester();

		expect(() => requester.request()).toThrow(Error("No request url provided"))
	});

	test("createRequester - empty config", () => {
		const requester = createRequester();

		expect(() => requester.request("http://localhost:3000", {})).not.toThrow()
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
			"Accept": "application/json",
			"Authorization": "Bearer token"
		});
		expect(console.log).toHaveBeenNthCalledWith(3, "options:", {method: "POST"});
		expect(console.groupEnd).toHaveBeenCalled();
	});
});
