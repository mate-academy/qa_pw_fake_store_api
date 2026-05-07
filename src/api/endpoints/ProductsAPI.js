import { expect } from "../../../tests/_fixtures/fixtures";
import { BaseAPI } from "../BaseAPI";

export class ProductAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' }
  }

  async createNewProduct(body) {
    return await this.step('Create a new product', async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      })
    })
  }

  async updateProduct(productId, body) {
    return await this.step('Update a product', async () => {
      return await this.request.put(`${this._endpoint}/${productId}`, {
        data: body,
        headers: this._headers,
      })
    })
  }

  async getProduct(productId) {
    return await this.step(`Get a single product`, async () => {
      return await this.request.get(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  };

  async deleteProduct(productId) {
    return await this.step(`Delete product`, async () => {
      return await this.request.delete(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async getAllProducts() {
    return await this.step('Get all products', async () => {
      return await this.request.get(this._endpoint, {
        headers: this._headers
      })
    })
  }

  async assertTitleIsCorrect(response, title) {
    await this.step(`Assert the title of the product is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.title).toEqual(title);
    });
  }

  async assertPriceIsCorrect(response, price) {
    await this.step(`Assert the price of the product is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.price).toEqual(price);
    });
  }

  async assertDescriptionIsCorrect(response, description) {
    await this.step(`Assert the description of the product is correct`,
      async () => {
        const body = await this.parseBody(response);

        expect(body.description).toEqual(description);
      });
  }

  async assertCategoryIsCorrect(response, category) {
    await this.step(`Assert the category of the product is correct`,
      async () => {
        const body = await this.parseBody(response);

        expect(body.category).toEqual(category);
      });
  }

  async assertImageIsCorrect(response, image) {
    await this.step(`Assert the image of the product is correct`,
      async () => {
        const body = await this.parseBody(response);

        expect(body.image).toEqual(image);
      });
  }
}