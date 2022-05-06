// 하나의 테스트 코드 (test, it)
describe("expect test", () => {
	it("37 equal 37", () => {
		expect(37).toBe(37);
	});

	// {} 객체 비교시 expect.toEqual
	it("{age: 37} equal {age: 37}", () => {
		expect({ age: 37 }).toEqual({ age: 37 });
	});

	// toHaveLength 길이비교 함수
	it(".toHaveLength", () => {
		expect("hello").toHaveLength(5);
	});

	//
	it(".toBeDefined", () => {
		expect({ name: "Mark" }.name).toBeDefined();
	});

	it(".toBeFalsy", () => {
		expect(false).toBeFalsy();
		expect(0).toBeFalsy();
		expect(null).toBeFalsy();
		expect("").toBeFalsy();
		expect(undefined).toBeFalsy();
		expect(NaN).toBeFalsy();
	});

	it("toBeGreaterThan", () => {
		expect(10).toBeGreaterThan(9);
	});

	it("toBeGreaterThanOrEqual", () => {
		expect(10).toBeGreaterThanOrEqual(10);
	});

	it("toBeInstanceOf", () => {
		class A {}
		expect(new A()).toBeInstanceOf(A);
	});
});

// test("add 1+2 to equal 3", () => {
// 	expect(1 + 2).toBe(3);
// });
