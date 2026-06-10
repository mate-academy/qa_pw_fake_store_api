import { BaseAPI } from '../BaseAPI';
import { expect } from '../../../tests/_fixtures/fixtures';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }
  async createNewProduct(body) {
    return await this.step(`Create new product`, async () => {
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

  async assertTitleIsCorrect(response, title) {
    await this.step(`Assert product title is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.title).toBe(title);
    });
  }

  async assertPriceIsCorrect(response, price) {
    await this.step(`Assert product price is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.price).toBe(price);
    });
  }

  async assertDescriptionIsCorrect(response, description) {
    await this.step(`Assert product description is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.description).toBe(description);
    });
  }

  async assertCategoryIsCorrect(response, category) {
    await this.step(`Assert product category is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.category).toBe(category);
    });
  }

  async assertImageIsCorrect(response, image) {
    await this.step(`Assert product image is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.image).toBe(image);
    });
  }
}
