import CreateTagService from "./services/CreateTagService";
import {InMemoryTagRepository} from "./repositories/inMemoryTagRepository";

describe('CreateTag service', () => {
    it('Should be able to create a new Tag', async () => {
        const inMemoryTagRepository = new InMemoryTagRepository();
        const createTag = new CreateTagService(inMemoryTagRepository);

        await expect(createTag.execute({ name: 'Teste unitário' }))
            .resolves
            .not
            .toThrow()

        expect(inMemoryTagRepository.items).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: 'Teste unitário'
                })
            ]))
    })

    it('Should NOT be able to create a new Tag', async () => {
        const inMemoryTagRepository = new InMemoryTagRepository();
        const createTag = new CreateTagService(inMemoryTagRepository);

        await expect(createTag.execute({ name: '' }))
            .rejects
            .toThrow()

        expect(inMemoryTagRepository.items).toEqual([])
    })
})