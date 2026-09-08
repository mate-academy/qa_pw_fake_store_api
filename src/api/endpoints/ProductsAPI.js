import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async assertTitleIsCorrect(response, title) {
    await this.step(`Assert response body has correct title`, async () => {
      const body = await this.parseBody(response);

      expect(body.title === title).toBe(true);
    });
  }
  async assertPriceIsCorrect(response, price) {
    await this.step(`Assert response body has correct price`, async () => {
      const body = await this.parseBody(response);

      expect(body.price === price).toBe(true);
    });
  }
  async assertDescriptionIsCorrect(response, description) {
    await this.step(
      `Assert response body has correct description`,
      async () => {
        const body = await this.parseBody(response);

        expect(body.description === description).toBe(true);
      },
    );
  }
  async assertCategoryIsCorrect(response, category) {
    await this.step(`Assert response body has correct category`, async () => {
      const body = await this.parseBody(response);

      expect(body.category === category).toBe(true);
    });
  }
  async assertImageIsCorrect(response, image) {
    await this.step(`Assert response body has correct image`, async () => {
      const body = await this.parseBody(response);

      expect(body.image === image).toBe(true);
    });
  }
}
