import { expect } from "allure-playwright";
import { BaseAPI } from "../BaseAPI";

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
  }

  async createProduct(body) {
    return this.step(`Create new product`, async () => {
      return this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async deleteProductById(id) {
    return this.step(`Delete product with ID ${id}`, async () => {
      return this.request.delete(`${this._endpoint}/${id}`, {
        headers: this._headers,
      });
    });
  }

  async getProductById(id) {
    this.step(`Read product with ID ${id}`, async () => {
      return this.request.get(`${this._endpoint}/${id}`, {
        headers: this._headers,
      });
    });
  }

  async updateProduct(id, body) {
    return this.step(`Update product with ID ${id}`, async () => {
      return this.request.put(`${this._endpoint}/${id}`, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async assertProductPropertyToEqualValue(response, property, expectedValue) {
    return this.step(`Assert product ${property} equals '${expectedValue}'`, async () => {
      const body = await this.parseBody(response);
      expect(body[property]).toEqual(expectedValue);
    });
  }
}