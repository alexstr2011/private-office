import {ContactsActions, ContactsActionsEnum, IContactsState} from "./types";

const initialState: IContactsState = {
  contacts: []
};

const contactsReducer = (state = initialState, action: ContactsActions): IContactsState => {
    switch(action.type) {
        case ContactsActionsEnum.ADD:
            return {
                ...state, contacts: [...state.contacts, action.payload]
            }
        case ContactsActionsEnum.REMOVE: {
            const index = state.contacts.findIndex(item => item.id === action.payload);
            return {
                ...state,
                contacts: [...state.contacts.slice(0, index), ...state.contacts.slice(index + 1)]
            }
        }
        case ContactsActionsEnum.CHANGE: {
            const index = state.contacts.findIndex(item => item.id === action.payload.id);
            const newContacts = [...state.contacts];
            newContacts[index] = action.payload.contact;
            return {
                ...state,
                contacts: newContacts
            }
        }
        case ContactsActionsEnum.REMOVE_ALL:
            return {
                ...state, contacts: []
            }
        default:
            return state;
    }
};

export default contactsReducer;