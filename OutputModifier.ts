import * as global from "./index";
import {stacker} from "./SharedLibrary";
import {State} from "./index";

declare const state: State & {
    stackOutput: number[] | undefined;
}

const stackOutputFunction = [];

const modifier = (text: string) => {
    if (!state.stackOutput)
        state.stackOutput = [];

    let result = stacker(stackOutputFunction, state.stackOutput, text);

    // You must return an object with the text property defined.
    return { text: result };
}

// Don't modify this part
modifier(text);