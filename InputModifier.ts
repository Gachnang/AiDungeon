import * as global from "./index";
import {stacker} from "./SharedLibrary";

const stackInputFunction = [
    function (text) {
    // DEBUG
        console.log(history);
        return text; },
    function (text) {
    // Save first line in memory
        if (Array.isArray(history) && history.length > 0) {
            const memoryArray = history[0].text.split('\n');
            console.log(state.memory);
            let i = 0;
            while(i < memoryArray.length && memoryArray[i].trim().length == 0) {
                i++;
            }

            //memory = memoryArray[i] + "\n" + (memory || "");
            state.stackInput = state.stackInput.filter(sO => sO != 1);
            console.log(memory);
        }
    }
];

const modifier = (text) => {
    if (!state.stackInput)
        state.stackInput = [1,0];

    let result = stacker(stackInputFunction, state.stackInput, text);

    // You must return an object with the text property defined.
    return { text: result };
}

// Don't modify this part
modifier(text)