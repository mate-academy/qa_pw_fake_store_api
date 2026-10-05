import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async createNewProduct(body) {
    return this.step(`Create new product`, async () => {
      return this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async updateProduct(productId, body) {
    return this.step(`Update product data`, async () => {
      return this.request.put(`${this._endpoint}/${productId}`, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async getProduct(productId) {
    return this.step(`Read product data`, async () => {
      return this.request.get(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async getAllProducts() {
    return this.step(`Read all products data`, async () => {
      return this.request.get(this._endpoint, {
        headers: this._headers,
      });
    });
  }

  async deleteProduct(productId) {
    return this.step(`Delete product`, async () => {
      return this.request.delete(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async assertTitleHasCorrectValue(response, title) {
    await this.step(`Assert response body has correct title`, async () => {
      const body = await this.parseBody(response);
      expect(body.title).toEqual(title);
    });
  }

  async assertPriceHasCorrectValue(response, price) {
    await this.step(`Assert response body has correct price`, async () => {
      const body = await this.parseBody(response);
      expect(body.price).toEqual(price);
    });
  }

  async assertDescriptionHasCorrectValue(response, description) {
    await this.step(
      `Assert response body has correct description`,
      async () => {
        const body = await this.parseBody(response);
        expect(body.description).toEqual(description);
      },
    );
  }

  async assertCategoryHasCorrectValue(response, category) {
    await this.step(`Assert response body has correct category`, async () => {
      const body = await this.parseBody(response);
      expect(body.category).toEqual(category);
    });
  }

  async assertImageHasCorrectValue(response, image) {
    await this.step(`Assert response body has correct image`, async () => {
      const body = await this.parseBody(response);
      expect(body.image).toEqual(image);
    });
  }
}
