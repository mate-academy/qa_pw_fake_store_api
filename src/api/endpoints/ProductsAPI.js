import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async createNewProducts(body) {
    return await this.step(`Create new products`, async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async updateProduct(productId, body) {
    return await this.step(`Update product data`, async () => {
      return await this.request.put(`${this._endpoint}/${productId}`, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async getProduct(productId) {
    return await this.step(`Read product data`, async () => {
      return await this.request.get(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async deleteProduct(productId) {
    return await this.step(`Delete product`, async () => {
      return await this.request.delete(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async getAllProducts() {
    return await this.step(`Read all products data`, async () => {
      return await this.request.get(this._endpoint, {
        headers: this._headers,
      });
    });
  }

  async assertFieldIsCorrect(response, field, value) {
    await this.step(`Assert the product's ${field} is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body[field]).toEqual(value);
    });
  }

  async assertProductIdIsCorrect(response, id) {
    await this.assertFieldIsCorrect(response, 'id', id);
  }

  async assertProductTitleIsCorrect(response, title) {
    await this.assertFieldIsCorrect(response, 'title', title);
  }

  async assertProductPriceIsCorrect(response, price) {
    await this.assertFieldIsCorrect(response, 'price', price);
  }

  async assertProductDescriptionIsCorrect(response, description) {
    await this.assertFieldIsCorrect(response, 'description', description);
  }
  
  async assertProductCategoryIsCorrect(response, category) {
    await this.assertFieldIsCorrect(response, 'category', category);
  }

  async assertProductImageIsCorrect(response, image) {
    await this.assertFieldIsCorrect(response, 'image', image);
  }
}
