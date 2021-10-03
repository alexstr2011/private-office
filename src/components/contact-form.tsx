import React from "react";
import {contactTypesArray, ContactTypesEnum} from "../store/reducers/contacts/types";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creators";

const ContactForm = () => {
    const dispatch = useDispatch();

    const [contact, setContact] = React.useState({
        name: '',
        type: contactTypesArray[0].key,
        value: ''
    });
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const target = e.currentTarget;
        setContact({
            ...contact, [target.name]: target.value
        });
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(allActionCreators.ContactsActionCreators.Add({
            id: Date.now(),
            name: contact.name,
            type: (contact.type as ContactTypesEnum),
            value: contact.value
        }));
    }

    let inputValueType = 'text';
    if (contact.type === ContactTypesEnum.EMAIL) {
        inputValueType = 'email';
    } else if (contact.type === ContactTypesEnum.PHONE) {
        inputValueType = 'tel';
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    onChange={changeHandler}
                    value={contact.name}
                    required />
            </label>
            <label>Type:
                <select
                    onChange={changeHandler}
                    name='type'
                    value={contact.type}
                >
                    {
                        contactTypesArray.map(item => <option value={item.key}>{item.value}</option>)
                    }
                </select>
            </label>
            <label>Value:
                <input
                    type={inputValueType}
                    name='value'
                    onChange={changeHandler}
                    value={contact.value}
                    required />
            </label>
            <button>Add</button>
        </form>
    );
}

export default ContactForm;
