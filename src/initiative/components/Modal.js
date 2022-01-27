//~~~--------------------------------------------------------------------------------------
// Modal
//  Requires react-transition-group, react-dom
//  onClose(), show, title
//~~~--------------------------------------------------------------------------------------

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./css/modal.css";

const Modal = props => {
    
    const closeOnEscapeKeyDown = (e) =>{
        if((e.charCode || e.keyCode) === 27){
            props.onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return function cleanup(){
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        }
    }, []);


    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout = {{enter:0, exit:300}}
        >
            <div className="modal" className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className="modalContent" onClick={e => e.stopPropagation()} >
                    <div className="modalHeader">
                        <h4 className="modalTitle">{props.title}</h4>
                        <button onClick={props.onClose}>Close</button>
                    </div>
                    <div className="modalBody" >
                        {props.children}
                    </div>
                    <div className="modalFooter">
                        
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    )
    
}

export default Modal;