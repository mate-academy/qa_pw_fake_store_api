import { test } from '../../_fixtures/fixtures';

test('Create user', async ({ newUserData, usersAPI }) => {
  const response = await usersAPI.createNewUser(newUserData);

  await usersAPI.assertSuccessResponseCode(response);
  await usersAPI.assertBodyHasId(response);
});
