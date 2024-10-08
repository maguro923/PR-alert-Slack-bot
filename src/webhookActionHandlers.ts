import { PullRequestClosedEvent, PullRequestOpenedEvent } from "@octokit/webhooks-types";
import { IDS, REPLYTOKEN_SERVER_URL, USE_REPLYTOKEN } from "./env";
import { push, reply } from "./line";
import { Message } from "@line/bot-sdk";

export function onPullRequestOpened(evt: PullRequestOpenedEvent) {
    IDS.forEach(id => {
        const msgs: Message[] = [{
            type: "text",
            text:
                `Pull Request Created
on ${evt.pull_request.created_at}
by ${evt.pull_request.user.login}
${evt.pull_request.html_url}`
        }];

        if (USE_REPLYTOKEN) {
            const replyTokens: {
                "timestamp": number
                "id": string
                "replyToken": string // https://github.com/GodaHaruki/Line-replytoken-bot
            }[] = JSON.parse(UrlFetchApp.fetch(REPLYTOKEN_SERVER_URL + "?id=" + id).getContentText());

            if (replyTokens.length > 0) reply(replyTokens[0].replyToken, msgs);
            else push(id, msgs);
        } else {
            push(id, msgs)
        }
    })
}