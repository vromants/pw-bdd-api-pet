import { CONFIG } from "../config/env";
import type { ControllerOptions } from "./controllers/base.controller";
import { PetController } from "./controllers/pet.controller";
import { UserController } from "./controllers/user.controller";

export class ApiClient {
	public readonly pet: PetController;
	public readonly user: UserController;

	constructor(options?: Partial<ControllerOptions>) {
		const defaultOptions = {
			prefixUrl: CONFIG.PETSTORE_URL,
			prefixPath: CONFIG.PETSTORE_API_PREFIX_PATH,
		};
		const mergedOptions = {
			...defaultOptions,
			...options,
		};
		this.pet = new PetController(mergedOptions);
		this.user = new UserController(mergedOptions);
	}

	static unauthorized() {
		return new ApiClient();
	}

	static async loginAs(credentials: { username: string; password: string }) {
		const token = await new ApiClient().user.login(credentials);
		return new ApiClient({
			token,
		});
	}
}
