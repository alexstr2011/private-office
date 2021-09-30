export enum ContactTypesEnum {
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    SITE = 'SITE'
}

export interface IContact {
    id: number;
    name: string;
    type: ContactTypesEnum;
    value: string;
}

export interface IContactsState {
    contacts: Array<IContact>;
}

export enum ContactsActionsEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    CHANGE = 'CHANGE',
    REMOVE_ALL = 'REMOVE_ALL'
}

export interface IAddContactAction {
    type: ContactsActionsEnum.ADD,
    payload: IContact
}

export interface IRemoveContactAction {
    type: ContactsActionsEnum.REMOVE,
    payload: number
}

export interface IChangeContactAction {
    type: ContactsActionsEnum.CHANGE,
    payload: {
        id: number,
        contact: IContact
    }
}

export interface IRemoveAllAction {
    type: ContactsActionsEnum.REMOVE_ALL
}

export type ContactsActions =
    IAddContactAction |
    IRemoveContactAction |
    IChangeContactAction |
    IRemoveAllAction;
