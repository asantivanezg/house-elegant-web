import {BaseError} from './base-error';

export class HttpRequestCustomError extends BaseError {
  public status: number;
  public code: string;
  public message: string;

  constructor(code: string, message: string) {
    super();
    this.status = parseInt(code);
    this.code = code;
    this.message = message;
  }
}
