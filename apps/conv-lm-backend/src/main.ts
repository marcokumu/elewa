import { config } from 'firebase-functions';
import * as admin from 'firebase-admin';

// Init Firebase Upload
const conf = config().firebase;
admin.initializeApp(conf);

export * from './functions/fns-webhooks';
export * from './functions/fns-messages';

export * from './app/functions/botProcess.function';
export * from './app/functions/bot/processMessage.function';
export * from './app/functions/bot/registerUser.function';
export * from './app/functions/bot/addMessage.function';
