import { test } from '../../_fixtures/fixtures';

test('Create user', async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertCreatedResponseCode(response);
  await usersApi.assertBodyHasId(response);
});
