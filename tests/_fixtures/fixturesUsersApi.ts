import { UsersAPI } from '../../src/api/endpoints/UsersAPI';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { test as genericTest } from './fixturesGeneric';

type UserData = ReturnType<typeof generateNewUserData>;

export const test = genericTest.extend<{
  usersApi: UsersAPI;
  newUserData: UserData;
  updateUserData: UserData;
}>({
  usersApi: async ({ request }, use) => {
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
