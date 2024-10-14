# PR-alert-Line-bot
## What is this
Google App Script(GAS) Project  
Github Webhook => Line Messagin API

## How to deploy
1. init repository
```bash
npm i
...
```
2. create App Script Project by clasp
```bash
clasp login
...
clasp create
```

3. modify .clasp.json
```diff
{
  "scriptId": ...,
- "rootDir": ...,
+ "roodDir": "./dist",
}
```
4. create .env file
```env
CHANNEL_ACCESS_TOKEN=""
IDS="["Line User or Group Id"]"
LOG_SHEET_ID="Your Log Sheet Id"
LOG_SHEET_NAME="Your Log Sheet Name"
USE_REPLYTOKEN=0 // 0 or 1 0 = false, 1 = true
REPLYTOKEN_SERVER_URL="" // https://github.com/GodaHaruki/Line-replytoken-bot.git
```
5. deploy
```bash
npm run deploy
```