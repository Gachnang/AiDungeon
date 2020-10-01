var main = function (text) {
    if (!state.stack)
        state.stack = [
            function (text) { return text.replace("A", "B"); }
        ];
    var result = text, i = state.stack.length;
    do {
        result = state.stack[--i](result);
    } while (i > 0);
    return { text: result };
};
main(text);
