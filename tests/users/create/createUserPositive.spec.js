import { test } from '../../_fixtures/fixtures';

test('Create user', async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccessCreationResponseCode(response);
  await usersApi.assertBodyHasId(response);
});
