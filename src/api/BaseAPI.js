import { expect } from '../../tests/_fixtures/fixtures';
import { testStep } from '../common/helpers/pw';
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

  async assertSuccessResponseCode(response, expectedStatus) {
    await this.step(
      `Assert the code ${expectedStatus} is returned`,
      async () => {
        expect(this.parseStatus(response)).toEqual(expectedStatus);
      },
    );
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

  async create(body) {
    return await this.step(`Create resource`, async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async getAll() {
    return await this.step(`Read all resources data`, async () => {
      return await this.request.get(this._endpoint, {
        headers: this._headers,
      });
    });
  }

  async getById(id) {
    return await this.step(`Read resource data`, async () => {
      return await this.request.get(`${this._endpoint}/${id}`, {
        headers: this._headers,
      });
    });
  }

  async delete(id) {
    return await this.step(`Delete resource data`, async () => {
      return await this.request.delete(`${this._endpoint}/${id}`, {
        headers: this._headers,
      });
    });
  }

  async update(id, body) {
    return await this.step(`Update resource data`, async () => {
      return await this.request.put(`${this._endpoint}/${id}`, {
        data: body,
        headers: this._headers,
      });
    });
  }
}
