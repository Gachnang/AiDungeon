export declare const text: string;

// @ts-ignore
declare type History = Readonly<HistoryEntry[]>;
declare type HistoryEntry = Readonly<{
    text: string,
    type: "story" | "continue" | "do" | "say";
}>;
// @ts-ignore
// You have access to (but can't modify) the history object which is a list of the previous actions of the player and of the AI.
export declare const history: History;

declare type Quests = string;
// You can modify the quests property to change the quests of the adventure mid game.
export declare const quests: Quests;

// You have access to (but can't modify) the memory object which is the current user defined memory.
export declare const memory: string;

declare type Memory = {
    // You can modify the memory the game uses by settings the state.memory.context value. This will replace the user defined memory.
    context: string | undefined;
    // You can also set state.memory.frontMemory, which will include whatever is there in front of even the last action when it's fed into the model, but still not display it to the user.
    frontMemory: string | undefined;
    // You can set state.memory.authorsNote to provide a piece of text that will always be injected three lines back in the game history. This will not be shown to the user, but the AI will see it.
    authorsNote: string | undefined;
};

declare type State = {
    // You can set any variable on state to store and modify adventures throughout an adventure.
    [key: string]: any,
    memory: Memory,
    // The state.message value will be displayed as a extra message in the game (if it exists)
    message: string | undefined};
// The state variable can be used to store information that's persistent across function calls.
export declare const state : State;

declare type WorldEntries = {[key: string]: string};
// You can read from the worldEntries parameter (same as world info that you can set on the scenario)
export declare const worldEntries : WorldEntries;
export declare const addWorldEntry: (keys: string, entry: string) => void;
export declare const removeWorldEntry: (index) => void;
export declare const updateWorldEntry: (index, keys: string, entry: string) => void;
