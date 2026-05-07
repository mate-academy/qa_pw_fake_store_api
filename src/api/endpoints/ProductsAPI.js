import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async addNewProduct(body) {
    return await this.step(`Add new product`, async () => {
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

  async assertTitleIsCorrect(response, title) {
    await this.step(`Assert the good' title is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.title).toEqual(title);
    });
  }

  async assertPriceHasCorrectValue(response, price) {
    await this.step(`Assert response body has correct price`, async () => {
      const body = await this.parseBody(response);

      expect(body.price === price).toBe(true);
    });
  }

  async assertTitleHasCorrectValue(response, title) {
    await this.step(`Assert response body has correct title`, async () => {
      const body = await this.parseBody(response);

      expect(body.title === title).toBe(true);
    });
  }

  async assertDescriptionHasCorrectValue(response, description) {
    await this.step(`Assert body has correct description`, async () => {
      const body = await this.parseBody(response);

      expect(body.description === description).toBe(true);
    });
  }

  async assertCategoryHasCorrectValue(response, category) {
    await this.step(`Assert body has correct category`, async () => {
      const body = await this.parseBody(response);

      expect(body.category === category).toBe(true);
    });
  }

  async assertImageHasCorrectValue(response, image) {
    await this.step(`Assert body has correct image`, async () => {
      const body = await this.parseBody(response);

      expect(body.image === image).toBe(true);
    });
  }
}
