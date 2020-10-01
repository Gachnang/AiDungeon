// @ts-ignore
export type History = Readonly<HistoryEntry[]>;
export type HistoryEntry = Readonly<{
    text: string,
    type: "story" | "continue" | "do" | "say";
}>;

export type Quests = string;

export type Memory = {
    // You can modify the memory the game uses by settings the state.memory.context value. This will replace the user defined memory.
    context: string | undefined;
    // You can also set state.memory.frontMemory, which will include whatever is there in front of even the last action when it's fed into the model, but still not display it to the user.
    frontMemory: string | undefined;
    // You can set state.memory.authorsNote to provide a piece of text that will always be injected three lines back in the game history. This will not be shown to the user, but the AI will see it.
    authorsNote: string | undefined;
};

export type State = {
    // You can set any variable on state to store and modify adventures throughout an adventure.
    [key: string]: any,
    memory: Memory,
    // The state.message value will be displayed as a extra message in the game (if it exists)
    message: string | undefined};

export type WorldEntry = Readonly<{
    id: string,
    // Comma separated keys
    keys: string,
    entry: string,
    isNotHidden: boolean
}>
export type WorldEntries = ReadonlyArray<WorldEntry>;

declare global {
    const text: string;
    // @ts-ignore
    // You have access to (but can't modify) the history object which is a list of the previous actions of the player and of the AI.
    const history: History;
    // You can modify the quests property to change the quests of the adventure mid game.
    const quests: Quests;
    // You have access to (but can't modify) the memory object which is the current user defined memory.
    const memory: string;
    // The state variable can be used to store information that's persistent across function calls.
    const state : State;
    // You can read from the worldEntries parameter (same as world info that you can set on the scenario)
    const worldEntries : WorldEntries;
    const addWorldEntry: (keys: string, entry: string) => void;
    const removeWorldEntry: (index) => void;
    const updateWorldEntry: (index, keys: string, entry: string) => void;
}