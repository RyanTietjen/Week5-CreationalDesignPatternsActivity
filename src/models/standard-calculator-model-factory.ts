import { AbstractCalculatorModelFactory } from '../interfaces/calculator-model-factory';
import { StandardCalculatorModel } from '../models/calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {

    private static theFactory: StandardCalculatorModelFactory

    public static instance(): StandardCalculatorModelFactory{
        if (StandardCalculatorModelFactory.theFactory === undefined){
            StandardCalculatorModelFactory.theFactory = new StandardCalculatorModelFactory();
        }
        return this.theFactory;
    }


  createCalculatorModel(): ICalculatorModel {
    return new StandardCalculatorModel();
  }
}