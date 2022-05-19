import {UserRepository} from "../repositories/UserRepository";
import {TagRepository} from "../repositories/TagRepository";

export interface ITagRequest {
    name: string
}

export default class CreateTagService {

    async execute({ name }: ITagRequest) {
        const tagRepository = TagRepository;

        if(!name) {
            throw new Error('Name required');
        }

        const tagAlreadyExist = await tagRepository.findOne({
            where: {
                name
            }
        })

        if(tagAlreadyExist) {
           throw new Error('Tag already exist')
        }

        const tag = tagRepository.create({
            name
        })

        await tagRepository.save(tag)

        return tag
    };

};