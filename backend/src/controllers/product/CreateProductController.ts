import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
    async handle( req: Request, res: Response ) {

        const { 
                name,
                price, 
                description, 
                banner, 
                category_id 
            } = req.body;
        
        const createProductService = new CreateProductService();

        if(!req.file) {
            throw new Error("Erro ao enviar imagem do banner!")
        }
        else{

            const { originalname, filename } = req.file;

            console.log(originalname)

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: "",
                category_id,
            });
    
            res.json(product);
        }
    }
}

export { CreateProductController };