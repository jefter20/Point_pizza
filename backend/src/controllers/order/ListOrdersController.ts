import { Request, Response } from 'express';
import { ListOrdersService } from '../../services/order/ListOrdersService';

class ListOrdersController {
    async handle( req: Request, res: Response ) {
       
        const listOrdersInPreparation = new ListOrdersService();
        const orders = await listOrdersInPreparation.execute();

        res.json(orders);
        
    }
}

export { ListOrdersController };