import type { components, operations } from "../../.temp/types";
import { step } from "../../utils/step";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
	@step("[UserController] login")
	async login(credentials: { username: string; password: string }) {
		return (
			await this.request()
				.url("user/login")
				.headers({ Accept: "application/json" })
				.searchParams(credentials)
				.send<operations["loginUser"]["responses"]["200"]>(false)
		).headers.token as string;
	}
}
