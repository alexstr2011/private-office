import React from "react";
import ContactsTable from "../components/contacts-table";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";
import Modal from "../components/modal";
import ContactForm from "../components/contact-form";
import {IContact} from "../store/reducers/contacts/types";

const Contacts = () => {
    const contacts = useTypedSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();
    const [isModalShown, setIsModalShown] = React.useState(false);
    const [editContact, setEditContact] = React.useState<IContact|undefined>();

    const removeHandler = (id: number) => {
        dispatch(allActionCreators.ContactsActionCreators.Remove(id));
    }
    const editHandler = (id: number) => {
        setEditContact(contacts.find(item => item.id === id));
        setIsModalShown(true);
    };
    const removeEditContact = () => {
        setEditContact(undefined);
    };

    const closeModal = () => {
        setIsModalShown(false)
    };

    return (
        <div>Contacts
            <ContactsTable contacts={contacts} editHandler={editHandler} removeHandler={removeHandler} />
            {isModalShown && (
                <Modal closeModal={closeModal}>
                    <ContactForm
                        closeModal={closeModal}
                        editContact={editContact}
                        removeEditContact={removeEditContact}
                    />
                </Modal>
            )}
            <button onClick={() => setIsModalShown(true)}>Add new contact</button>
        </div>
    );
}

export default Contacts;
