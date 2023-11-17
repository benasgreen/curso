import {Router, Request, Response} from 'express'
import { truncate } from 'fs'
import { userInfo } from 'os'
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoControllers'
import * as userController from '../controllers/userController'
import * as aboutController from '../controllers/aboutController'

const router = Router()

//criando a primeira rota 'home'
router.get("/",homeController.home)
router.get("/sobre",infoController.sobre)
router.get("/contato",infoController.contato)
router.get("/nome",userController.nome) 
router.get("idade",userController.idade)
router.post('/idade',userController.idadeResultado)
router.get("/login",userController.login)
router.post("/login",userController.loginEmail)



export default router