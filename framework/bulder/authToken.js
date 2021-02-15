import { authData } from '../config';

const token = `Basic ${Buffer.from(authData).toString('base64')}`;

export { token };
