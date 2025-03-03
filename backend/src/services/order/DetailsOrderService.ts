import prismaClient from "../../prisma";

interface DetailsOrderRequest {
    order_id: string;
}

class DetailsOrderService {
    async execute( { order_id }: DetailsOrderRequest ) {

        const orderDetails = await prismaClient.orderItem.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true,
            }
        });

        return orderDetails;

    }
}

export { DetailsOrderService };