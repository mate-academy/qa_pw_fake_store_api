import { expect } from '../../../tests/_fixtures/fixtures';
import { BaseAPI } from '../BaseAPI';

export class UsersAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/users';
    this._headers = { 'content-type': 'application/json' };
  }

  async createNewUser(body) {
    return await this.step(`Create new user`, async () => {
      return await this.request.post(this._endpoint, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async updateUser(userId, body) {
    return await this.step(`Update user data`, async () => {
      return await this.request.put(`${this._endpoint}/${userId}`, {
        data: body,
        headers: this._headers,
      });
    });
  }

  async getUser(userId) {
    return await this.step(`Read user data`, async () => {
      return await this.request.get(`${this._endpoint}/${userId}`, {
        headers: this._headers,
      });
    });
  }



  async getAllUsers() {
    return await this.step(`Read all users data`, async () => {
      return await this.request.get(this._endpoint, {
        headers: this._headers,
      });
    });
  }

  async assertNameIsCorrect(response, name) {
    await this.step(`Assert the good' name is correct`, async () => {
      const body = await this.parseBody(response);

      expect(body.name).toEqual(name);
    });
  }

  async assertEmailHasCorrectValue(response, email) {
    await this.step(`Assert response body has correct email`, async () => {
      const body = await this.parseBody(response);

      expect(body.email === email).toBe(true);
    });
  }

  async assertUsernameHasCorrectValue(response, username) {
    await this.step(`Assert response body has correct username`, async () => {
      const body = await this.parseBody(response);

      expect(body.username === username).toBe(true);
    });
  }

  async assertPasswordHasCorrectValue(response, password) {
    await this.step(`Assert response body has correct password`, async () => {
      const body = await this.parseBody(response);

      expect(body.password === password).toBe(true);
    });
  }
}
