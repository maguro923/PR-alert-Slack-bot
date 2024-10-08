// all of them are required

export const CHANNEL_ACCESS_TOKEN: string = process.env.CHANNEL_ACCESS_TOKEN!; // "00000"
export const IDS: string[] = JSON.parse(process.env.IDS!); // ["000","111"]
export const LOG_SHEET_ID: string = process.env.LOG_SHEET_ID!;
export const LOG_SHEET_NAME: string = process.env.LOG_SHEET_NAME!;
export const USE_REPLYTOKEN: boolean = parseInt(process.env.USE_REPLYTOKEN!) ? true : false // 1 or 0
export const REPLYTOKEN_SERVER_URL: string = process.env.REPLYTOKEN_SERVER_URL!; // https://github.com/GodaHaruki/Line-replytoken-bot