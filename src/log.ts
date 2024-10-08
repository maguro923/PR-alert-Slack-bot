export function log(l: string){
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    const timestamp = (new Date).getTime();
    sheet.getRange(lastRow, 1, 1, 2).setValues([[timestamp, log]])
}