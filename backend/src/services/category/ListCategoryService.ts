import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {

        const Category = prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return Category;

    }
}

export { ListCategoryService };