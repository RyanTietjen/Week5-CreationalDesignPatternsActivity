import { StandardCalculatorModel } from "../models/calculator.model";
import { ICalculatorModel } from "./calculator-model.interface";
export abstract class AbstractCalculatorModelFactory {  
    abstract createCalculatorModel(): ICalculatorModel;
}
  