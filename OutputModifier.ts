import * as global from "./index";
import {stacker} from "./SharedLibrary";
import {State} from "./index";

declare const state: State & {
    deathcounter: number | undefined;
    stackOutput: number[] | undefined;
}

const stackOutputFunction = [
    function (text: string): string {
        //undie: First part of regex ignores everything in quotes, rest of it match keywords "you die"..
        let regexp = new RegExp(/(?<=^([^"]|"[^"]*")*)((you .{0,30} die)|(killed .{0,30} you)|(you .{0,30} get killed)|(You .{0,30} dead))/gmi);
        if (regexp.test(text)) {
            text += " You feel how the curse forces you to stay alive and even heals you.";
            if (typeof state.deathcounter === "number") {
                state.deathcounter++;
            } else {
                state.deathcounter = 1;
            }
        }

        return text;
    }
];

const modifier = (text: string) => {
    if (!state.stackOutput)
        state.stackOutput = [0];

    let result = stacker(stackOutputFunction, state.stackOutput, text);

    // You must return an object with the text property defined.
    return { text: result };
}

// Don't modify this part
modifier(text);