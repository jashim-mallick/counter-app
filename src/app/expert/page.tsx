import Expert from "@/components/Expert";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert |  Counter App",
	description: "Expert Counter App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			{/* ***Expert Counter Card**** */}
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl font-bold">
					<CardTitle>Expert Counter App</CardTitle>
				</CardHeader>
				<CardContent>
					<Expert />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
