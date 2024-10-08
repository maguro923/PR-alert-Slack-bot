import { Message } from "@line/bot-sdk";
import { CHANNEL_ACCESS_TOKEN } from "./env";

export function push(to: string, msgs: Message[]){
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        contentType: "application/json",
        method: "post",
        headers: {
            Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN
        },
        payload: JSON.stringify({
            to: to,
            messages: msgs
        }),
    };

    UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}

export function reply(replyToken: string, msgs: Message[]){
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        contentType: "application/json",
        method: "post",
        headers: {
            Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN,
        },
        payload: JSON.stringify({
            replyToken: replyToken,
            messages: msgs
        })
    };

    UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", options);
}