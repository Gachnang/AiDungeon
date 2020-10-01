import * as global from "./index";
import {stacker} from "./SharedLibrary";
import {State} from "./index";

declare const state: State & {
    deathcounter: number | undefined;
    stackOutput: number[] | undefined;
}

const stackOutputFunction = [
    function (text: string): string {
        //undie
        let regexp = new RegExp(/(you die)|(killed you)|(you get killed)/gmi);
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