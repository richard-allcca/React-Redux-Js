import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
} from "../store/slices/counter";

const Count = () => {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Counter</h1>

			<div className="card">
				<button onClick={() => dispatch(increment())}>
					count + 1 is {counter}
				</button>
				<button onClick={() => dispatch(incrementByAmount(5))}>
					count + 5 is {counter}
				</button>
				<button onClick={() => dispatch(decrement())}>
					count - 1 is {counter}
				</button>
			</div>
		</>
	);
};

export default Count;
