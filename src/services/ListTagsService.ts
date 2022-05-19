import {TagRepository} from "../repositories/TagRepository";
import {classToPlain} from "class-transformer";

export default class ListTagsService {

    async execute() {
        const tags = await TagRepository.find()

        return classToPlain(tags);
    }

}