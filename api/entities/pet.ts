import * as Factory from "factory.ts";
import type { components } from "../../.temp/types";

export type Pet = components["schemas"]["Pet"];

export const petFactory = Factory.Sync.makeFactory<Pet>({
	id: Factory.each((i) => i),
	category: {
		name: "string",
	},
	name: "Cat",
	photoUrls: ["http://test.com/image.jpg"],
	tags: [
		{
			id: 0,
			name: "string",
		},
	],
	status: "available",
});
