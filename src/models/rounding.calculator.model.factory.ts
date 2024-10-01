import { AbstractCalculatorModelFactory } from '../interfaces/calculator-model-factory';
import { RoundingCalculatorModel } from './rounding-calculator-model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class RoundingCalculatorModelFactory extends AbstractCalculatorModelFactory {
    private _nrDecimals: number;
    constructor(_nrDecimals: number){
        super();
        this._nrDecimals = _nrDecimals;
    }
  createCalculatorModel(): ICalculatorModel {
    return new RoundingCalculatorModel(this._nrDecimals);
  }
}