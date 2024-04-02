import { test as base } from "playwright-bdd";
import { ApiClient } from "../api/client";

type ApiClientFixture = {
	unauthorizedClient: ApiClient;
	adminClient: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	unauthorizedClient: async ({}, use) => {
		await use(ApiClient.unauthorized());
	},
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	async adminClient({}, use) {
		const apiClient = await ApiClient.loginAs({
			username: "admin",
			password: "admin",
		});
		await use(apiClient);
	},
});

export { expect } from "@playwright/test";
