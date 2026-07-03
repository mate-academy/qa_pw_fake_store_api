import { BaseAPI } from '../BaseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async getProduct(productId) {
    return await this.step(`Read product data`, async () => {
        return await this.request.get(`${this._endpoint}/${productId}`, {
            headers: this._headers,
        });
    });
  }

  async createNewProduct(body) {
    return await this.step(`Create new product`, async () => {
        return await this.request.post(this._endpoint, {
            data: body,
            headers: this._headers,
        });
    });
  }
  async  updateProduct (productId, body){
    return await this.step(`Update product data`, async () => {
        return await this.request.put(`${this._endpoint}/${productId}`, {
            data: body,
            headers: this._headers,
        });
    });
  }

  async deleteProduct(productId){
    return await this.step(`Delete product`, async () => {
        return await this.request.delete(`${this._endpoint}/${productId}`, {
            headers: this._headers,
        });
    });

  }
}