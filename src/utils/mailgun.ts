import Mailgun from "mailgun.js";
import FormData from "form-data";

import { env } from "~/env.mjs";

export const mailgun = new Mailgun(FormData);
export const mg = mailgun.client({username: 'api', key: env.MAILGUN_API_KEY});
