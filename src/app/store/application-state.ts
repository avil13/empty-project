
export interface IPerson{
    id: number;
    address: string; // адрес пользователя в блокчейне
    name: string;
}

export interface ApplicationState {
    auth: IPerson | null;
}


export const INITIAL_STATE: ApplicationState = {
    auth: null
};
