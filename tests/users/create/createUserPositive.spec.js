import { test } from '../../_fixtures/fixtures';
import { SUCCESS_CREATED } from '../../../src/api/constants/responseCodes';

test('Create user', async ({ newUserData, usersApi }) => {
  const response = await usersApi.create(newUserData);

  await usersApi.assertSuccessResponseCode(response, SUCCESS_CREATED);
  await usersApi.assertBodyHasId(response);
});
