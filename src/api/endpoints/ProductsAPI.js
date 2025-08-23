import { BaseAPI } from '../BaseAPI';
import { expect } from '../../../tests/_fixtures/fixtures';


export class ProductsAPI extends BaseAPI {

  _endpoint;
  _headers;

  constructor(request) {
    super(request);

    this._endpoint = '/products';
    this._headers = {'content-type': 'application/json'};
  }


  async createNewProduct(body) {
    return await this.step('Create new product', async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    })
  }

  async deleteProduct(productId) {
    return await this.step(`Delete product by id ${productId}`, async () => {
      const deleteENDPOINT = `${this._endpoint}/${productId}`;
      return await this.request.delete(deleteENDPOINT, {
        headers: this._headers,
      });
    });
  }


  async getProduct(productId) {
    return await this.step(`Get product by id ${productId}`, async () => {
      const getENDPOINT = `${this._endpoint}/${productId}`;
      return await this.request.get(getENDPOINT, {
        headers: this._headers,
      });
    });
  }

  async updateProduct(productId, body) {
    return await this.step(`Update product by id ${productId}`, async () => {
      const updateENDPOINT = `${this._endpoint}/${productId}`
      return await this.request.put(updateENDPOINT, {
          data: body,
          headers: this._headers,
      });
    });
  }

  async assertPropertyEquals(response, property, expectedValue) {
    await this.step('Assert title has correct value', async () => {
      const properties = await this.parseBody(response);
      expect( properties[property] ).toBe(expectedValue);
    });
  }


}
