import React, {FC} from "react";
import {IContact} from "../store/reducers/contacts/types";
import ContactItem from "./contact-item";

interface IContactsTableProps {
    contacts: Array<IContact>;
    editHandler: (id: number) => void;
    removeHandler: (id: number) => void;
}

const ContactsTable: FC<IContactsTableProps> = ({contacts, editHandler, removeHandler}) => {
    const clickHandler = (e: React.MouseEvent<HTMLTableElement>) => {
        if (e.target instanceof HTMLElement) {
            const dataSet = e.target.dataset;
            const editId = Number(dataSet.editId);
            const removeId = Number(dataSet.removeId);
            if (!isNaN(editId) && editId) {
                console.log(editId);
                editHandler(editId);
            } else if (!isNaN(removeId) && removeId) {
                removeHandler(removeId);
            }
        }
    }

    return (
        <div>
            <table onClick={clickHandler}>
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

