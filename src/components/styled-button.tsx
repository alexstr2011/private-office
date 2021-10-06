import React, {FC} from "react";
import styles from './styled-button.module.css'

interface IStyledButtonProps {
    onClick?: () => void;
}

const StyledButton: FC<IStyledButtonProps> =
    ({children, onClick, ...rest}) => {

    return (
        <button className={styles.button} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}

export default StyledButton;