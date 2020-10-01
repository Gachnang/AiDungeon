import * as global from "./index";

// Checkout the repo examples to get an idea of other ways you can use scripting
// https://github.com/AIDungeon/Scripting/blob/master/examples

// info.memoryLength is the length of the memory section of text.
// info.maxChars is the maximum length that text can be. The server will truncate the text you return to this length.

// This modifier re-implements Author's Note as an example.
const modifier = (text) => {
    // first part of text will be memory
    const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
    // second part will be context
    const context = info.memoryLength ? text.slice(info.memoryLength + 1) : text;

    const lines = context.split("\n")
    if (lines.length > 2 && state.memory.authorsNote) {
        // Insert authorsNote
        lines.splice(-3, 0, `[Author's note: ${state.memory.authorsNote}]`);
    }

    // Make sure the new context isn't too long, or it will get truncated by the server.
    const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength));
    const finalText = [contextMemory, combinedLines].join("");
    return { text: finalText };
}

// Don't modify this part
modifier(text);