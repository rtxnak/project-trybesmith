import crypto from 'crypto';

export default { token: crypto.randomBytes(256).toString('hex') };
