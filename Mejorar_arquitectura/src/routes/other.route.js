import express from "express";
import * as otherController from '../controllers/other.controller.js';

const router = express.Router();

router.get('/info', otherController.getInfo);

export default router;