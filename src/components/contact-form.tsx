import React, {FC} from "react";
import {contactTypesArray, ContactTypesEnum, IContact} from "../store/reducers/contacts/types";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";
import StyledButton from "./styled-button";
import styles from "./contact-form.module.css"

interface IContactFormProps {
    afterSubmitContact: () => void;
    editContact?: IContact
}

const ContactForm: FC<IContactFormProps> = ({afterSubmitContact, editContact}) => {
    const dispatch = useDispatch();

    const [contact, setContact] = React.useState({
        name: editContact ? editContact.name : '',
        type: editContact ? editContact.type : contactTypesArray[0].key,
        value: editContact ? editContact.value : ''
    });
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const target = e.currentTarget;
        setContact({
            ...contact, [target.name]: target.value
        });
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newContact = {
            id: editContact ? editContact.id : Date.now(),
            name: contact.name,
            type: (contact.type as ContactTypesEnum),
            value: contact.value
        };

        if (editContact) {
            dispatch(allActionCreators.ContactsActionCreators.Change(editContact.id, newContact));
        } else {
            dispatch(allActionCreators.ContactsActionCreators.Add(newContact));
        }
        afterSubmitContact();
    }

    let inputValueType = 'text';
    if (contact.type === ContactTypesEnum.EMAIL) {
        inputValueType = 'email';
    } else if (contact.type === ContactTypesEnum.PHONE) {
        inputValueType = 'tel';
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label>
                <span>Name:</span>
                <input
                    type='text'
                    name='name'
                    onChange={changeHandler}
                    value={contact.name}
                    placeholder='Name'
                    required />
            </label>
            <label>
                <span>Type:</span>
                <select
                    onChange={changeHandler}
                    name='type'
                    value={contact.type}
                >
                    {
                        contactTypesArray.map(item => <option value={item.key} key={item.key}>{item.value}</option>)
                    }
                </select>
            </label>
            <label>
                <span>Value:</span>
                <input
                    type={inputValueType}
                    name='value'
                    onChange={changeHandler}
                    value={contact.value}
                    placeholder='Value'
                    required />
            </label>
            <StyledButton>Save</StyledButton>
        </form>
    );
}

export default ContactForm;
