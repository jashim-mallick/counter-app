import Intermediate from "@/components/Intermediate";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Intermediate | Counter App",
	description: "Intermediate Counter App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			{/* *** Intermediate Counter Card */}
			<Card className="w-xs">
				<CardHeader className="text-center text-xl font-bold">
					<CardTitle>Intermediate Counter App</CardTitle>
				</CardHeader>
				<CardContent>
					<Intermediate />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
