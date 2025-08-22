import { BaseAPI } from '../BaseAPI';
import { expect } from '../../../tests/_fixtures/fixtures';


export class ProductsAPI extends BaseAPI {

  _endpoint;
  _headers;

  constructor(request) {
    super(request);

    this._endpoint = '/products';
    this._headers = {'content-type': 'application/json'};
  }


  async createNewProduct(body) {
    return await this.step('Create new product', async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    })
  }

  async deleteProduct(productId) {
    return await this.step(`Delete product by id {productId}`, async () => {
      const deleteENDPOINT = `${this._endpoint}/${productId}`;
      return await this.request.delete(deleteENDPOINT, {
        headers: this._headers,
      });
    });
  }

  async getProduct(productId) {
    return await this.step(`Get product by id ${productId}`, async () => {
      const getENDPOINT = `${this._endpoint}/${productId}`;
      return await this.request.get(getENDPOINT, {
        headers: this._headers,
      });
    });
  }

  async updateProduct(productId, body) {
    return await this.step(`Update product by id ${productId}`, async () => {
      const updateENDPOINT = `${this._endpoint}/${productId}`
      return await this.request.put(updateENDPOINT, {
          data: body,
          headers: this._headers,
      });
    });
  }

  async assertTitleHasCorrectValue(response, titleProp) {
    await this.step('Assert tittle has correct value', async () => {
      const { title } = await this.parseBody(response);
      expect( title ).toBe(titleProp);
    });
  }

  async assertPriceHasCorrectValue(response, priceProp) {
    await this.step('Assert price has correct value', async () => {
      const { price } = await this.parseBody(response);
      expect(price).toBe(priceProp);
    });
  }

  async assertDescriptionHasCorrectValue(response, descriptionProp) {
    await this.step('Assert description has correct value', async () => {
      const { description } = await this.parseBody(response);
      expect(description).toBe(descriptionProp);
    });
  }

  async assertCategoryHasCorrectValue(response, categoryProp) {
    await this.step('Assert category has correct value', async () => {
      const { category } = await this.parseBody(response);
      expect(category).toBe(categoryProp);
    });
  }

  async assertImageHasCorrectValue(response, imageProp) {
    await this.step('Assert image has correct value', async () => {
      const { image } = await this.parseBody(response);
      expect(image).toBe(imageProp);
    });
  }

}
