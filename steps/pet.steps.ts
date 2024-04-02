import { createBdd } from "playwright-bdd";
import type { ApiClient } from "../api/client";
import { petFactory } from "../api/entities/pet";
import type { PWResponse } from "../api/request";
import { expect, test } from "../fixtures/api-client.fixture";

const { Given, When, Then } = createBdd(test);
let apiClient: ApiClient;
let response: PWResponse;

const petToCreate = petFactory.build();

Given("I logged in as admin", async ({ adminClient }) => {
	apiClient = adminClient;
});

When("I make a call to add new pet with valid params", async () => {
	response = await apiClient.pet.addNew(petToCreate);
});

Then("I see response code is 200 and schema is valid", async () => {
	expect(response.status).toBe(200);
	expect(response.body).toMatchObject(petToCreate);
});

Then("I assert new pet was added", async () => {
	const resp = await apiClient.pet.getById(response.body.id);
	expect(resp.status).toBe(200);
	expect(resp.body.id).toBe(response.body.id);
});
