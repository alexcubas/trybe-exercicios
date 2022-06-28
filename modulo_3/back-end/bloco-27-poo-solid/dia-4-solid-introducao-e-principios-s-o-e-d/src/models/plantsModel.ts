// import connection from './connection';
import fs from 'fs/promises';
import IPlant from '../interfaces/Iplant';

export default class PlantsModel {
  readPlants = async () => {
    const plantsRaw = await fs.readFile('plants.json', { encoding: 'utf8' });
    const plants: IPlant = JSON.parse(plantsRaw);
    return plants;
  }

  getPlants = async () => this.readPlants
}