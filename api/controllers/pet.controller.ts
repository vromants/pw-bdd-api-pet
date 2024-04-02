import type { operations } from "../../.temp/types";
import { step } from "../../utils/step";
import type { Pet } from "../entities/pet";
import { BaseController } from "./base.controller";

export class PetController extends BaseController {
	@step("[PetController] getById")
	async getById(id: number | string) {
		return this.request()
			.url(`pet/${id}`)
			.send<
				operations["getPetById"]["responses"]["200"]["content"]["application/json"]
			>();
	}

	@step("[PetController] addNew")
	async addNew(pet: Omit<Pet, "id">) {
		return await this.request()
			.url("pet")
			.method("POST")
			.body(pet)
			.send<
				Required<
					operations["addPet"]["responses"]["200"]["content"]["application/json"]
				>
			>();
	}
}
