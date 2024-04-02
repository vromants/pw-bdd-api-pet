import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
	importTestFrom: "./fixtures/api-client.fixture.ts",
	paths: ["./features/*"],
	require: ["./steps/*"],
});

export default defineConfig({
	testDir,
	fullyParallel: false,
	workers: 1,
	forbidOnly: process.env.CI ? true : undefined,
	timeout: 2 * 60 * 1000, // 5 minutes
	globalSetup: "utils/generate-typings.ts",
	reporter: [["list"], ["html"]],
	use: {
		trace: {
			mode: "on",
		},
	},
});
