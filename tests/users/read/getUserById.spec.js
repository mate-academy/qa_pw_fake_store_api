import { test } from '../../_fixtures/fixtures';
import { SUCCESS_OK } from '../../../src/api/constants/responseCodes';

test('Read user information by Id', async ({ usersApi }) => {
  const userId = 1;

  const response = await usersApi.getById(userId);

  await usersApi.assertSuccessResponseCode(response, SUCCESS_OK);
  await usersApi.assertBodyHasId(response);
});
