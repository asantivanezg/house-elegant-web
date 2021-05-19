export class BaseError extends Error {
  constructor() {
    super();
    // Error.apply(this, arguments);
  }
}

// BaseError.prototype = new Error();
