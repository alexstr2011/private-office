import React, {FC} from "react";
import {IContact} from "../store/reducers/contacts/types";
import ContactItem from "./contact-item";
import styles from './contacts-table.module.css';

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
                editHandler(editId);
            } else if (!isNaN(removeId) && removeId) {
                removeHandler(removeId);
            }
        }
    }

    return (
        <table onClick={clickHandler} className={styles.table}>
            <thead>
            <tr>
                <th className={styles.techColumn}>Number</th>
                <th>Name</th>
                <th className={styles.techColumn}>Type</th>
                <th>Value</th>
                <th className={styles.techColumn}>Edit</th>
                <th className={styles.techColumn}>Remove</th>
            </tr>
            </thead>
            <tbody>
            {
                contacts.map((item, index) =>
                    <ContactItem contact={item} key={item.id} number={index + 1}/>)
            }
            </tbody>
        </table>
    );
}

export default ContactsTable;

