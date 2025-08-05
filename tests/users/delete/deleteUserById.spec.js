import { test } from '../../_fixtures/fixtures';

let userId;

test.beforeEach(async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccessResponseCode201(response);

  userId = await usersApi.parseIdFromBody(response);
});

test('Delete user by Id', async ({ usersApi }) => {
  const response = await usersApi.deleteUser(userId);

  await usersApi.assertSuccessResponseCode200(response);
});
