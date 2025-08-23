import { test } from '../../_fixtures/fixtures';

test('Read user information by Id', async ({ usersAPI }) => {
  const userId = 1;

  const response = await usersAPI.getUser(userId);

  await usersAPI.assertSuccessResponseCode(response);
  await usersAPI.assertBodyHasId(response);
});
