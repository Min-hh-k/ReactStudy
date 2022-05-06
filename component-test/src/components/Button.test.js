import { act, fireEvent, getByText, render } from "@testing-library/react";
import Button from "./Button";

describe("button 컴포넌트(@testing-library/react", () => {
	it("컴포넌트가 정상적으로 생성된다.", () => {
		const button = render(<Button />);
		expect(button).not.toBe(null);
	});
	it('"button" 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.', () => {
		const { getByText } = render(<Button />);

		const buttonElement = getByText("button");

		expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
	});

	it('버튼을 클릭하면, p태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다', () => {
		const buttonElement = getByText("button");

		fireEvent.click(buttonElement);

		const p = getByText("버튼이 눌렀다");
		expect(p).not.toBeNull();
		expect(p).toBeInstanceOf(HTMLParagraphElement);
	});

  it('버튼을 클릭하기전에, p태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다', () => {
		const {getByText} = render(<Button />);

		const p = getByText("버튼이 눌리지 않았다");
		expect(p).not.toBeNull();
		expect(p).toBeInstanceOf(HTMLParagraphElement);
	});

  it('버튼을 클릭하고 5초 뒤에, p 태그 안에 "버튼이 눌리지 않았다"라고 쓰여진다', () => {
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    jest.useFakeTimers();
		const {getByText} = render(<Button />);

		fireEvent.click(buttonElement);

    // 5초


		const p = getByText("버튼이 눌리지 않았다");
		expect(p).not.toBeNull();
		expect(p).toBeInstanceOf(HTMLParagraphElement); 
  }

});
