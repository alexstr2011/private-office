import React, {FC} from "react";
import {IContact} from "../store/reducers/contacts/types";
import StyledButton from "./styled-button";

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
                <StyledButton data-edit-id={contact.id}>Edit</StyledButton>
            </td>
            <td>
                <StyledButton data-remove-id={contact.id}>Remove</StyledButton>
            </td>
        </tr>
    );
}

export default ContactItem;