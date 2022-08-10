import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironemtVariables = {
  DEV_BACKEND_URL,
};
const prodEnvironemtVariables = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironemtVariables : prodEnvironemtVariables;
