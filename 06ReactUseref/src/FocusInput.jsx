import { useRef } from "react";

export default function FocusInput() {
	const inputElement = useRef(null);

	const handleClick = () => {
		inputElement.current.focus();
	}

	return <div>
		<input type="text" ref={inputElement} />
		<button onClick={handleClick}>Focus Input</button>
	</div>;
}