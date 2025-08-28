"use client";

import { useState } from "react";

import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./shadcnui/button";

const Expert = () => {
	const [count, setCount] = useState<number>(0);

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const minusTen = () => {
		if (count >= 10) {
			setCount(count - 10);
		}
	};

	const plus = () => {
		if (count >= 0) {
			setCount(count + 1);
		}
	};

	const plusTen = () => {
		if (count >= 0) {
			setCount(count + 10);
		}
	};

	return (
		<div className="grid grid-cols-1 space-y-8">
			<div className="text-center text-xl font-semibold">
				Counter Value : {count}
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button
					disabled={count < 1}
					variant={"destructive"}
					className="cursor-pointer"
					onClick={minus}>
					<CircleMinus /> Minus
				</Button>
				<Button
					disabled={count >= 100}
					className="cursor-pointer"
					onClick={plus}>
					<CirclePlus /> Plus
				</Button>
				<Button
					disabled={count <= 9}
					variant={"destructive"}
					className="cursor-pointer"
					onClick={minusTen}>
					<CircleMinus /> Minus 10
				</Button>
				<Button
					disabled={count >= 91}
					className="cursor-pointer"
					onClick={plusTen}>
					<CirclePlus /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default Expert;
