import React, {FC} from "react";
import {IContact} from "../store/reducers/contacts/types";

interface IContactItemProps {
    contact: IContact;
    number: number;
}

const ContactItem: FC<IContactItemProps> = ({contact, number}) => {
    return (
        <tr>
            <td>
                {number}
            </td>
            <td>
                {contact.name}
            </td>
            <td>
                {contact.type}
            </td>
            <td>
                {contact.value}
            </td>
            <td>
                <button data-id={contact.id}>Remove</button>
            </td>
        </tr>
    );
}

export default ContactItem;