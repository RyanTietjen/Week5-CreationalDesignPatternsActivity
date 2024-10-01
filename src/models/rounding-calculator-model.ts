
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class RoundingCalculatorModel implements ICalculatorModel {
    
  private _buffer: string = '';
  private _nrDecimals: number;

  constructor(nrDecimals: number){
    this._nrDecimals = nrDecimals
  }

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  public pressActionKey(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        // eslint-disable-next-line no-eval
        this._buffer = (<number> eval(this._buffer)).toString();
        this.round()
        break;
      default:
        throw new Error('Invalid Action');
    }
  }

  private round(): void{
    // I used AI for these two lines
    const result = parseFloat(this._buffer);
    this._buffer = result.toFixed(this._nrDecimals).replace(/(?:\.0*|(\.\d+?)0+)$/, '$1');
  }

  public display(): string {
    return this._buffer;
  }

}
