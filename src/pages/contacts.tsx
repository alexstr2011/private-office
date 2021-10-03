import React from "react";
import ContactsTable from "../components/contacts-table";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";

const Contacts = () => {
    const contacts = useTypedSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const removeHandler = (id: number) => {
        dispatch(allActionCreators.ContactsActionCreators.Remove(id));
    }

    return (
        <div>Contacts
            <ContactsTable contacts={contacts} removeHandler={removeHandler} />
        </div>
    );
}

export default Contacts;
