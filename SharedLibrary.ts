export function stacker(stackFunction: ((text: string) => string)[], stackValue: number[], text: string): string {
    if (Array.isArray(stackFunction) && Array.isArray(stackValue)) {
        let result = text || "", stackValueCopy = stackValue.concat([]), i = stackValueCopy.length;
        while (i > 0) {
            if (
                typeof stackValueCopy[--i] === "number" &&
                stackFunction.length > stackValueCopy[i] &&
                typeof stackFunction[stackValueCopy[i]] === "function") {

                result = stackFunction[stackValueCopy[i]](result);
            } else {
                console.log(i + ": ERROR! " + stackValueCopy[i]);
            }
        }

        // You must return an object with the text property defined.
        return result;
    }
    throw "Wrong parameters!";
}