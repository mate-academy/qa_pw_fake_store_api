import { test as base } from '@playwright/test';
import { UsersAPI } from '../../src/api/endpoints/UsersAPI';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';

export const test = base.extend<{
  usersAPI;
  newUserData;
  updateUserData;
}>({
  usersAPI: async ({ request }, use) => {
    const client = new UsersAPI(request);

    await use(client);
  },
  newUserData: async ({ logger }, use) => {
    const userData = generateNewUserData(logger);

    await use(userData);
  },
  updateUserData: async ({ logger }, use) => {
    const userData = generateNewUserData(logger);

    await use(userData);
  },
});
