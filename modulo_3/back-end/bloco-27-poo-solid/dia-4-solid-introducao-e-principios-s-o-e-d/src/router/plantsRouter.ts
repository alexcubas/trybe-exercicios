import { Request, Response, Router } from 'express';
import PlantsController from '../controller/plantsController';

const plantsController = new PlantsController();

const plantsRouter = Router();

plantsRouter.get(
  './',
  async (req: Request, res: Response) => {
    await plantsController.getPlants(req, res);
  },
);

export default plantsRouter;