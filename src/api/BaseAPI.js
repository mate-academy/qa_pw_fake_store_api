import { expect } from '../../tests/_fixtures/fixtures';
import { testStep } from '../common/helpers/pw';
import { SUCCESS_CODE, CREATED_RESOURCE_CODE } from './constants/responceCodes';

export class BaseAPI {
  _endpoint;
  _headers;

  constructor(request) {
    this.request = request;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun);
  }

  async parseStatus(response) {
    return response.status();
  }

  async parseBody(response) {
    return await response.json();
  }

  async parseIdFromBody(response) {
    const body = await this.parseBody(response);

    return body.id;
  }

  async assertSuccessResponseCode(response) {
    await this.step(`Assert the code ${SUCCESS_CODE} is returned`, async () => {
      expect(await this.parseStatus(response)).toEqual(SUCCESS_CODE);
    });
  }
  async assertCreatedResourceResponseCode(response) {
    await this.step(`Assert the code ${CREATED_RESOURCE_CODE} is returned`, async () => {
      expect(await this.parseStatus(response)).toEqual(CREATED_RESOURCE_CODE);
    });
  }

  async assertBodyIsNotEmpty(response) {
    await this.step(`Assert response body is not empty`, async () => {
      const body = await this.parseBody(response);

      expect(body).not.toBe([]);
    });
  }

  async assertBodyHasId(response) {
    await this.step(`Assert response body has ID`, async () => {
      const body = await this.parseBody(response);

      expect(Number(body.id) > 0).toBe(true);
    });
  }

  async assertTitleHasCorrectValue(response, expectedTitle) {
    await this.step(`Assert response body has correct title`, async () => {
      const body = await this.parseBody(response);
      expect(body.title).toEqual(expectedTitle);
    });
  }

  async assertPriceHasCorrectValue(response, expectedPrice) {
    await this.step(`Assert response body has correct price`, async () => {
      const body = await this.parseBody(response);

      expect(body.price).toEqual(expectedPrice);
    });
  }

  async assertDescriptionHasCorrectValue(response, expectedDescription) {
    await this.step(`Assert response body has correct description`, async () => {
      const body = await this.parseBody(response);
      expect(body.description).toEqual(expectedDescription);
    });
  }

  async assertCategoryHasCorrectValue(response, expectedCategory) {
    await this.step(`Assert response body has correct category`, async () => {
      const body = await this.parseBody(response);
      expect(body.category).toEqual(expectedCategory);
    });
  }

  async assertImageHasCorrectValue(response, expectedImage) {
    await this.step(`Assert response body has correct image`, async () => {
      const body = await this.parseBody(response);
      expect(body.image).toEqual(expectedImage);
    });
  }
}