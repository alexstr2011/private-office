import React, {FC} from "react";
import {IContact} from "../store/reducers/contacts/types";
import ContactItem from "./contact-item";

interface IContactsTableProps {
    contacts: Array<IContact>;
    removeHandler: (id: number) => void;
}

const ContactsTable: FC<IContactsTableProps> = ({contacts, removeHandler}) => {
    const removeClickHandler = (e: React.MouseEvent<HTMLTableElement>) => {
        if (e.target instanceof HTMLElement) {
            const id = Number(e.target.dataset.id);
            if (!isNaN(id)) {
                removeHandler(id);
            }
        }
    }

    return (
        <div>
            <table onClick={removeClickHandler}>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((item, index) =>
                        <ContactItem contact={item} key={item.id} number={index + 1}/>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default ContactsTable;

