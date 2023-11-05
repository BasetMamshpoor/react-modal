import React, { useState } from 'react'
import style from './Modal.module.css'
import close from '../image/close.svg'

const Modal = ({ content }) => {
    const [isOpen, setIsOpen] = useState(true)

    const childrenWithProps = React.Children.map(content, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setIsOpen });
        }
        return child;
    });

    return isOpen
        ? <>
            <div onClick={() => setIsOpen(false)} className={style.modal_background}>
                <div className={style.modal}>
                    <button className={style.close} onClick={() => setIsOpen(false)}><img src={close} alt=''/></button>
                    {childrenWithProps}
                </div>
            </div>
        </>
        : null
}

export default Modal