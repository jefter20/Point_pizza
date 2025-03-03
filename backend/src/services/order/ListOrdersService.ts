import prismaClient from "../../prisma";

class ListOrdersService {
    async execute() {

        const listOrdersInPreparation = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'asc'
            }
        });


        if(!listOrdersInPreparation) {
            throw new Error("Não há mesas abertas no momento!");
        }

        return listOrdersInPreparation;

    }
}

export { ListOrdersService };