import { generateConstantsAction } from './untils';

export const HOME_CONSTANTS = {
  ...generateConstantsAction('UPDATE_STORE_PROFILE'),
  ...generateConstantsAction('GET_STORES'),
};

export const host = 'http://localhost:8081';
