import { test } from '../../_fixtures/fixtures';

test('Create user', async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccess201ResponseCode(response);
  await usersApi.assertBodyHasId(response);
});
