import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationsController = new CreateSpecificationsController(createSpecificationUseCase);

export { createSpecificationsController };