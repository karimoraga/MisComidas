import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})

export class API {
  private key: string = '65a9f3d936f34486aa36ad8dec55a6b4';
  private url: string = 'https://api.spoonacular.com';

  constructor() {}

  async generatePlan(timeFrame: string, calories:number, diet: string, exclude: string): Promise<string> {
    const gourl = `${this.url}/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${calories}&diet=${diet}&exclude=${exclude}&apiKey=${this.key}`;
    return new Promise((resolve, reject) => {
      const data = CapacitorHttp.get({url: gourl}).then((r) => {
        resolve(r.data);
      });
    })
  }
}