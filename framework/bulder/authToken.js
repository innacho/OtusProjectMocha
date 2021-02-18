const createToken = (authData) => `Basic ${Buffer.from(authData).toString('base64')}`;

export { createToken };
