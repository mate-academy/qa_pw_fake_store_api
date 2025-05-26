import { test } from '../../_fixtures/fixtures';

test('Read user information by Id', async ({ usersApi }) => {
  const userId = 1;

  const response = await usersApi.getUser(userId);

  await usersApi.assertSuccessResponseCode(response);
  await usersApi.assertBodyHasIdField(response);
});
