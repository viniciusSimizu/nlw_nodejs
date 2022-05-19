import {TagRepository} from "../../src/repositories/TagRepository";
import {ITagRequest} from "../../src/services/CreateTagService";
import Tag from "../entities/Tag";

export class InMemoryTagRepository {
    public items: Tag[] = [];

    async createTag({name}: ITagRequest): Promise<Tag> {
        return {name} as Tag;
    }

    async findOneTag(options: { where: { name: string } }): Promise<Tag | null> {
        this.items.forEach(item => {
            if (item.name == options.where.name) {
                return item;
            }
        })
        return null;
    }

    async saveTag(tag: Tag): Promise<Tag[]> {
        this.items.push(tag);
        return this.items;
    }
}