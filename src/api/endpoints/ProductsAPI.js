import { json } from 'stream/consumers';
import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class ProductAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async createNewProduct(body) {
    return await this.step(`Create new product`, async () => {
      return await this.request.post(this._endpoint, {
        json: body,
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

  async updateProduct(productId, body) {
    return await this.step(`Update product data`, async () => {
      return await this.request.put(`${this._endpoint}/${productId}`, {
        data: body,
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
    await this.step(`Assert the title is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.title).toEqual(title);
    });
  }

  async assertPriceIsCorrect(response, price) {
    await this.step(`Assert the price is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.price).toEqual(price);
    });
  }

  async assertDescriptionIsCorrect(response, description) {
    await this.step(`Assert the description is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.description).toEqual(description);
    });
  }

  async assertImageIsCorrect(response, image) {
    await this.step(`Assert the image is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.image).toEqual(image);
    });
  }

  async assertCategoryIsCorrect(response, category) {
    await this.step(`Assert the category is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.category).toEqual(category);
    });
  }
}
