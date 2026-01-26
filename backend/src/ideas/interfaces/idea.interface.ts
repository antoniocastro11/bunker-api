export interface Idea {
    title: string;
    description: string;
    status: Status;
    type: IdeaType;
}

export enum Status {
    Completed = "Completed",
    InProgress = "InProgress",
    Stopped = "Stopped",
}

export enum IdeaType {
    WebApp = "WebApp",
    MobileApp = "MobileApp",
    Game = "Game",
    Automation = "Automation",
}