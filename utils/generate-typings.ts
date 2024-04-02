import { execSync } from "node:child_process";
import { CONFIG } from "../config/env";

async function globalSetup(/** config: FullConfig */) {
	execSync(
		`npx openapi-typescript ${CONFIG.PETSTORE_SWAGGER_URL} --output ./.temp/types.ts`,
		{ stdio: "inherit" },
	);
}

export default globalSetup;
