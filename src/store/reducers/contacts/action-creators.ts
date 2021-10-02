import {
    ContactsActionsEnum,
    IAddContactAction,
    IChangeContactAction,
    IContact,
    IRemoveAllAction,
    IRemoveContactAction
} from "./types";

export const ContactsActionCreators = {
    Add: (contact: IContact): IAddContactAction => ({
        type: ContactsActionsEnum.ADD,
        payload: contact
    }),
    Remove: (id: number): IRemoveContactAction => ({
        type: ContactsActionsEnum.REMOVE,
        payload: id
    }),
    Change: (id: number, contact: IContact): IChangeContactAction => ({
        type: ContactsActionsEnum.CHANGE,
        payload: {id, contact}
    }),
    RemoveAll: (): IRemoveAllAction => ({
        type: ContactsActionsEnum.REMOVE_ALL
    })
};
