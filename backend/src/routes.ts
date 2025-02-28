import { Router } from "express";
import multer from "multer";

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";

const router = Router();


const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userdetail', isAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//-- ROTAS ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/removeorder', isAuthenticated, new RemoveOrderController().handle)

//-- ROTAS ORDER ITEM --
router.post('/order/item', isAuthenticated, new AddItemController().handle);
router.delete('/order/removeitem', isAuthenticated, new RemoveItemController().handle);


export { router };