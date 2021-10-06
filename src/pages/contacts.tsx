import React from "react";
import ContactsTable from "../components/contacts-table";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";
import Modal from "../components/modal";
import ContactForm from "../components/contact-form";
import {IContact} from "../store/reducers/contacts/types";
import StyledButton from "../components/styled-button";
import styles from './contacts.module.css';

const Contacts = () => {
    const contacts = useTypedSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();
    const [isModalShown, setIsModalShown] = React.useState(false);
    const [editContact, setEditContact] = React.useState<IContact|undefined>();
    const [search, setSearch] = React.useState('');

    const filteredContacts = React.useMemo(() => {
        return contacts.filter(item => item.value.includes(search) || item.name.includes(search));
    }, [contacts, search]);

    const removeHandler = (id: number) => {
        dispatch(allActionCreators.ContactsActionCreators.Remove(id));
    }
    const editHandler = (id: number) => {
        setEditContact(contacts.find(item => item.id === id));
        setIsModalShown(true);
    };

    const afterSubmitContact = () => {
        setEditContact(undefined);
        setIsModalShown(false)
    }

    const closeModal = () => {
        setIsModalShown(false)
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1>Contacts</h1>
                <StyledButton onClick={() => dispatch(allActionCreators.AuthActionCreators.Logout())}>
                    Logout
                </StyledButton>
            </header>
            <label className={styles.search}>Search:
                <input
                    type='text'
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
            </label>
            <ContactsTable contacts={filteredContacts} editHandler={editHandler} removeHandler={removeHandler} />
            {isModalShown && (
                <Modal closeModal={closeModal}>
                    <ContactForm
                        afterSubmitContact={afterSubmitContact}
                        editContact={editContact}
                    />
                </Modal>
            )}
            <div className={styles.add}>
                <StyledButton onClick={() => setIsModalShown(true)}>Add new contact</StyledButton>
            </div>
        </div>
    );
}

export default Contacts;
