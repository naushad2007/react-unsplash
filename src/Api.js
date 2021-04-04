/**
 * -------------------------------------------------------------
 * Importing Unsplash object and using for fetching image data using
 * APP_KEY
 * SignUp Yourself in `https://unsplash.com/` GO TO Threedots -> API/Devlopers
 * Follow the instruction and API USE restriction to use the API KEY
 * -------------------------------------------------------------
 */

/**
 *  Github Link for the unsplash-js
 *  `https://github.com/unsplash/unsplash-js`
 */

import { createApi } from 'unsplash-js';
const APP_ACCESS_KEY = process.env.APP_ACCESS_KEY;
export const api = createApi({ accessKey: APP_ACCESS_KEY });
