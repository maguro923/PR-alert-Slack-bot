import { PullRequestOpenedEvent } from "@octokit/webhooks-types";
import { IDS } from "./env";
import { push } from "./line";

export function onPullRequestOpened(evt: PullRequestOpenedEvent) {
    IDS.forEach(id => {
        push(id, [{
            type: "text",
            text:
                `Pull Request Created
on ${evt.pull_request.created_at}
by ${evt.pull_request.user.name}
${evt.pull_request.url}
`
        }])
    })
}