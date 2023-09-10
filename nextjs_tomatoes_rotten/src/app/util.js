// util.js

import decode from 'jwt-decode';

export function decodeToken(token) {
  try {
    const decodedToken = decode(token);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}
