import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

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

  async getProduct(userId) {
    return await this.step(`Read product data`, async () => {
      return await this.request.get(`${this._endpoint}/${userId}`, {
        headers: this._headers,
      });
    });
  }

  async deleteProduct(userId) {
    return await this.step(`Delete product`, async () => {
      return await this.request.delete(`${this._endpoint}/${userId}`, {
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
    await this.step(`Assert the product title is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.title).toEqual(title);
    });
  }

  async assertPriceHasCorrectValue(response, price) {
    await this.step(`Assert the product price has correct value`, async () => {
      const body = await this.parseBody(response);

      expect(body.price).toEqual(price);
    });
  }

  async assertDescriptionIsCorrect(response, description) {
    await this.step(`Assert the product description is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.description).toEqual(description);
    });
  }

  async assertCategoryHasCorrectValue(response, category) {
    await this.step(
      `Assert the product category has correct value`,
      async () => {
        const body = await this.parseBody(response);

        expect(body.category).toEqual(category);
    });
  }

  async assertImageIsCorrect(response, image) {
    await this.step(`Assert the product image is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.image).toEqual(image);
    });
  }
}