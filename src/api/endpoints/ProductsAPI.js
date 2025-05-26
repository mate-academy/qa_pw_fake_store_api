import { BaseAPI } from "../BaseAPI";

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
  }

  async createProduct(body) {
    return this.request.post(this._endpoint, {
      data: body,
      haders: this._headers,
    });
  }

  async deleteProductById(id) {
    return this.request.delete(`${this._endpoint}/${id}`, {
      headers: this._headers,
    });
  }
}