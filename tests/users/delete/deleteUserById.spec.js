import { test } from '../../_fixtures/fixtures';

let userId;

test.beforeEach(async ({ newUserData, usersAPI }) => {
  const response = await usersAPI.createNewUser(newUserData);

  await usersAPI.assertSuccessResponseCode(response);

  userId = await usersAPI.parseIdFromBody(response);
});

test('Delete user by Id', async ({ usersAPI }) => {
  const response = await usersAPI.deleteUser(userId);

  await usersAPI.assertSuccessResponseCode(response);
});
