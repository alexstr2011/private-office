import React from "react";
import ContactsTable from "../components/contacts-table";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";
import {ContactTypesEnum} from "../store/reducers/contacts/types";

const Contacts = () => {
    const contacts = useTypedSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const addClickHandler = () => {
      dispatch(allActionCreators.ContactsActionCreators.Add({
          id: Date.now(),
          name: 'Name1',
          type: ContactTypesEnum.PHONE,
          value: '1234567890'
      }))
    };

    const removeHandler = (id: number) => {
        dispatch(allActionCreators.ContactsActionCreators.Remove(id));
    }

    return (
        <div>Contacts
            <ContactsTable contacts={contacts} removeHandler={removeHandler} />
            <button onClick={addClickHandler}>Add</button>
        </div>
    );
}

export default Contacts;
