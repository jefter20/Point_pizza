import { Request, Response } from 'express';

import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle( req: Request, res: Response ) {
        
        const user_id = req.user_id;

        const detailUserService = new DetailUserService();

        const userDetail = await detailUserService.execute(user_id);

        res.json(userDetail);
    }
}

export { DetailUserController };