import { BaseAPI } from '../BaseAPI';
import { expect } from '../../../tests/_fixtures/fixtures';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
  }

  async createProduct(body) {
    return await this.step(`POST create product`, async () => {
      return await this.request.post('/products', { data: body });
    });
  }

  async getProductById(id) {
    return await this.step(`GET product by id ${id}`, async () => {
      return await this.request.get(`/products/${id}`, {});
    });
  }

  async updateProduct(id, body) {
    return await this.step(`PUT update product ${id}`, async () => {
      return await this.request.put(`/products/${id}`, { data: body });
    });
  }

  async deleteProduct(id) {
    return await this.step(`DELETE product ${id}`, async () => {
      return await this.request.delete(`/products/${id}`, {});
    });
  }

  async assertBodyHasId(response) {
    await this.step(`Assert response body contains 'id'`, async () => {
      const body = await this.parseBody(response);

      if (Array.isArray(body)) {
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]?.id).toBeDefined();
      } else {
        expect(body?.id).toBeDefined();
      }
    });
  }

  async parseIdFromBody(response) {
    const body = await this.parseBody(response);
    return Array.isArray(body) ? body[0]?.id : body?.id;
  }

  async assertTitleIsCorrect(response, title) {
    await this.step(`Assert product title is correct`, async () => {
      const body = await this.parseBody(response);
      expect(body.title).toEqual(title);
    });
  }

  async assertPriceIsCorrect(response, price) {
    await this.step(`Assert product price is correct`, async () => {
      const body = await this.parseBody(response);
      expect(body.price).toEqual(price);
    });
  }

  async assertDescriptionIsCorrect(response, description) {
    await this.step(`Assert product description is correct`, async () => {
      const body = await this.parseBody(response);
      expect(body.description).toEqual(description);
    });
  }

  async assertCategoryIsCorrect(response, category) {
    await this.step(`Assert product category is correct`, async () => {
      const body = await this.parseBody(response);
      expect(body.category).toEqual(category);
    });
  }

  async assertImageIsCorrect(response, imageUrl) {
    await this.step(`Assert product image is correct`, async () => {
      const body = await this.parseBody(response);
      expect(body.image).toEqual(imageUrl);
    });
  }
}
