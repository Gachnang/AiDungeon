import * as global from "./index";
import {stacker} from "./SharedLibrary";
import {State} from "./index";

declare const state: State & {
    youare: string | undefined;
    unluckLevel: number | undefined;
    stackInput: number[] | undefined;
}

const stackInputFunction: ((text: string) => string)[] = [
    function (text: string) {
    // Save first line in state.youare
        if (Array.isArray(history) && history.length > 0) {
            const memoryArray = history[0].text.split('\n');
            console.log(state.memory);
            let i = 0;
            while(i < memoryArray.length && memoryArray[i].trim().length == 0) {
                i++;
            }

            state.youare = state.memory.authorsNote = memoryArray[i];
            state.stackInput = state.stackInput.filter(sO => sO != 0);
            console.log(memory);
        }
        return text;
    },
    function (text: string) {
        // unlucky...
        if (!state.memory.authorsNote)
            return text;
        /*
        if (typeof state.unluckLevel !== "number") {
            state.unluckLevel = 0;
        } else {
            state.unluckLevel++;
        }*/
        state.unluckLevel = info.actionCount % 16;

        if (state.unluckLevel < 3) {
            state.memory.authorsNote = state.youare + " You feel a bit unlucky.";
        } else if (state.unluckLevel < 6) {
            state.memory.authorsNote = state.youare + " You feel unlucky.";
        } else if (state.unluckLevel < 9) {
            state.memory.authorsNote = state.youare + " You feel a very unlucky, like something unlucky is about to happen to you.";
        } else if (state.unluckLevel < 12) {
            state.memory.authorsNote = state.youare + " You feel a extreme unlucky, something unlucky must happen to you!";
        } else {
            state.memory.authorsNote = state.youare + " You get misfortune and are out of luck, bad luck strikes you.";
        }

        return text;
    }
];

const modifier = (text: string) => {
    if (!state.stackInput)
        state.stackInput = [0,1];

    let result = stacker(stackInputFunction, state.stackInput, text);

    // You must return an object with the text property defined.
    return { text: result };
}

// Don't modify this part
modifier(text)