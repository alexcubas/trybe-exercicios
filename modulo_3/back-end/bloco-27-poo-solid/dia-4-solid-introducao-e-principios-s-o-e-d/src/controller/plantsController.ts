import { Request, Response } from 'express';
import PlantsModel from '../models/plantsModel';

export default class PlantsController {
  private plantsModel: PlantsModel;

  constructor() {
    this.plantsModel = new PlantsModel();
  }

  async getPlants(_req: Request, res: Response) {
    const result = await this.plantsModel.getPlants();

    return res.status(200).json(result);
  }
}