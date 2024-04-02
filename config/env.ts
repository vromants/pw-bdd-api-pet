import { url, cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
	PETSTORE_URL: url({
		default: "https://petstore3.swagger.io/",
		desc: "API URL to be tested",
	}),
	PETSTORE_API_PREFIX_PATH: str({
		default: "/api/v3",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	PETSTORE_SWAGGER_URL: url({
		default: "https://petstore3.swagger.io/api/v3/openapi.json",
		desc: "URL to SWAGGER json to be tested",
	}),
});
