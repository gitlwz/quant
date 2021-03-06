import { Authorized } from 'quant-ui';
import { getAuthority } from './authority';

let _Authorized = Authorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
    _Authorized = Authorized(getAuthority());
};

export { reloadAuthorized };
export default _Authorized;
