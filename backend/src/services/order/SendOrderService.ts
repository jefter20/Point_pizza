import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class SendOrderService {
    async execute( { order_id }: OrderRequest ) {

        const verificaItensMesa = await prismaClient.orderItem.findFirst({
            where: {
                order_id: order_id
            },
            select: {
                id: true
            }

        })

        if(!verificaItensMesa) {
            throw new Error("Pedido vazio, por favor adicione um item ao pedido para envia-lo!");
        }
        console.log(verificaItensMesa)
        const sendOrder = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        });

        return sendOrder;
    }
}

export { SendOrderService };