import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService';


class FinishOrderController {
    async handle( req: Request, res: Response ) {

        const { order_id } = req.body;

        const orderFinish = new FinishOrderService();
        const order = await orderFinish.execute({
            order_id
        });

        res.json(order);

    }
}

export { FinishOrderController };