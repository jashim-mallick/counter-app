"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	const [count, setCount] = useState<number>(0);

	const minus = () => {
		setCount(count - 1);
	};

	const plus = () => {
		setCount(count + 1);
	};

	return (
		<div className="grid grid-cols-1 space-y-8">
			<div className="text-center text-xl font-semibold">
				Counter Value : {count}
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button
					variant={"destructive"}
					className="cursor-pointer"
					onClick={minus}>
					<CircleMinus /> Minus
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plus}>
					<CirclePlus /> Plus
				</Button>
			</div>
		</div>
	);
};
export default BasicCounter;
