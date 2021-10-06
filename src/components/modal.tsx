import React, {FC} from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay';
import StyledButton from "./styled-button";

interface IModalProps {
    closeModal: () => void;
}

const modalRoot = document.getElementById("react-modals");

const Modal: FC<IModalProps> = ({closeModal, children}) => {

    React.useEffect(() => {
        const closeModalEsc = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', closeModalEsc);
        return ()=>{
            document.removeEventListener('keydown', closeModalEsc);
        };
    }, [closeModal]);

    return modalRoot &&
        ReactDOM.createPortal(
            (
                <>
                    <section className={styles.modal}>
                        <header className={styles.header}>
                            <StyledButton onClick={closeModal}>Close</StyledButton>
                        </header>
                        {children}
                    </section>
                    <ModalOverlay closeModal={closeModal}/>
                </>
            ),
            modalRoot
        );
};

export default Modal;