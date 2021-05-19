
export interface AdapterMapper<M, W, D> {
  // region ws
  mapperFromWsToModel(item: any): M;

  mapperFromListWsToModel(listItem: Array<any>): Array<M>;

  mapperModelToAny?(item: M): any;

  // endregion
}

export interface AdapterMapperWM<W, M> {
  // region ws
  mapperFromWs(item: any): W;

  mapperFromListWs(listItem: Array<any>): Array<W>;

  // endregion

  // region model

  mapperFromWsToModel(item: W): M;

  mapperFromListWsToModel(listItem: Array<W>): Array<M>;

  mapperModelToAny?(item: M): any;

  // endregion
}

export interface AdapterMapperWDM<W, D, M> {
  // region ws
  mapperFromWs(item: any): W;

  mapperFromListWs(listItem: Array<any>): Array<W>;

  // endregion

  // region bd
  mapperFromBd(item: any): D;

  mapperFromListDb(listItem: Array<any>): Array<D>;

  mapperFromModelToDb(item: M): D;

  // endregion
  // region model

  mapperFromWsToModel(item: W): M;

  mapperFromDbToModel(item: D): M;

  mapperFromListWsToModel(listItem: Array<W>): Array<M>;

  mapperFromListDbToModel(listItem: Array<D>): Array<M>;

  mapperModelToAny?(item: M): any;

  // endregion
}
