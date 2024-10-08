import { LOG_SHEET_ID, LOG_SHEET_NAME } from "./env";

export function log(l: string) {
    const sheet = SpreadsheetApp.openById(LOG_SHEET_ID).getSheetByName(LOG_SHEET_NAME)!;
    const lastRow = sheet.getLastRow();
    const timestamp = (new Date).getTime();
    sheet.getRange(lastRow + 1, 1, 1, 2).setValues([[timestamp, l]])
}