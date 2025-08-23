import { expect } from '../../tests/_fixtures/fixtures';
import { testStep } from '../common/helpers/pw';
import {
  SUCCESS_CODE,
  CREATED_CODE,
  NO_CONTENT_CODE,
} from './constants/responceCodes';

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

  async assertSuccessResponseCode(response, method = 'GET') {
    await this.step(`Assert successful response code`, async () => {
      const status = this.parseStatus(response);

      let expectedCode;
      switch (method.toUpperCase()) {
        case 'GET':
          expectedCode = SUCCESS_CODE;
          break;
        case 'POST':
          expectedCode = [SUCCESS_CODE, CREATED_CODE];
          break;
        case 'DELETE':
          expectedCode = NO_CONTENT_CODE;
          break;
        default:
          expectedCode = SUCCESS_CODE;
      }

      if (Array.isArray(expectedCode)) {
        expect(expectedCode).toContain(status);
      } else {
        expect(status).toBe(expectedCode);
      }
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
