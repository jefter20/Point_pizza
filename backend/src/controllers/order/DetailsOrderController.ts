import { Request, Response } from 'express';
import { DetailsOrderService } from '../../services/order/DetailsOrderService';

class DetailsOrderController {
    async handle( req: Request, res: Response) {

        const order_id = req.query.order_id as string;
        
        const orderDetails = new DetailsOrderService();
        const order = await orderDetails.execute({
            order_id
        });

        res.json(order);

    }
}

export { DetailsOrderController };