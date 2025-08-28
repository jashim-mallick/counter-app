import BasicCounter from "@/components/BasicCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter App",
	description: "Basic Counter App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			{/****** Basic Counter Card ***** */}
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl font-bold">
					<CardTitle>Basic Counter App</CardTitle>
				</CardHeader>
				<CardContent>
					<BasicCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
