import prismaClient from "../../prisma";

interface ItemRequest {
    item_id: string;
}

class RemoveItemService {
    async execute( { item_id }: ItemRequest ) {

        const orderItem = await prismaClient.orderItem.delete({
            where: {
                id: item_id
            },
            select: {
                id: true,
                amount: true,
                order_id: true,
                product_id: true
            }
        });

        return orderItem;

    }
}

export { RemoveItemService };