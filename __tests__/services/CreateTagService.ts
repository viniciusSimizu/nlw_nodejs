import {InMemoryTagRepository} from "../repositories/inMemoryTagRepository";

export interface ITagRequest {
    name: string
}

export default class CreateTagService {

    public tagRepository = new InMemoryTagRepository();

    constructor(repository) {
        this.tagRepository = repository;
    }


    async execute({ name }: ITagRequest) {

        if(!name) {
            throw new Error('Name required');
        }

        const tagAlreadyExist = await this.tagRepository.findOneTag({
            where: {
                name
            }
        })

        if(tagAlreadyExist) {
            throw new Error('Tag already exist')
        }

        const tag = await this.tagRepository.createTag({
            name
        })

        await this.tagRepository.saveTag(tag);

        return tag
    };

};