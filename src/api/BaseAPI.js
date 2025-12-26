import { expect } from '../../tests/_fixtures/fixtures';
import { testStep } from '../common/helpers/pw';
import { SUCCESS_CODE_200 } from './constants/responceCodes';
import { SUCCESS_CODE_201 } from './constants/responceCodes';

export class BaseAPI {
  _endpoint;
  _headers;

  constructor(request) {
    this.request = request;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun);
  }

  parseStatus(response) {
    return response.status();
  }

  async parseBody(response) {
    return await response.json();
  }

  async parseIdFromBody(response) {
    const body = await this.parseBody(response);

    return body.id;
  }

  async assertSuccessResponseCode200(response) {
    await this.step(`Assert the code ${SUCCESS_CODE_200} is returned`, async () => {
      expect(this.parseStatus(response)).toEqual(SUCCESS_CODE_200);
    });
  }

  async assertSuccessResponseCode201(response) {
    await this.step(`Assert the code ${SUCCESS_CODE_201} is returned`, async () => {
      expect(this.parseStatus(response)).toEqual(SUCCESS_CODE_201);
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
}
