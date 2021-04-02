import React, { useState } from "react";
import Modal from "react-modal";
import {ModalData} from "../Modal/Data";


Modal.setAppElement('#root');
const TopBottomLeftRight = () => {
    return(
        <>
        <div className="box-top-left box-image"></div>
        <div className="box-top-right box-image"></div>
        <div className="box-bottom-left box-image"></div>
        <div className="box-bottom-right box-image"></div>
        </>
    );
};

const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <div className="video-link clear-inline-block">
            <button className="taxly-icon taxly-icon-play" onClick={toggleModal}>{ModalData.videoModalText}</button>
        </div>
        <Modal className="modal video-modal is-visible" isOpen={isOpen} onRequestClose={toggleModal}>
            <div className="modal__overlay"></div>
            <div className="modal__content taxly-box">
                <TopBottomLeftRight />
                <div className="box-content">
                    <div className="modal__close" onClick={toggleModal}>Close</div>
                    <div className="modal__body">
                        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/LVeccgzap4s"></iframe></p>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    );
};

const DarkModal = () => {
    return(
        <>
        <div className="modal__body">
            <div className="text-center">
                <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                </div>
                <form className="init">
                    <h2>Let's get started</h2>
                    <p>Give us your details and we'll get right back to you</p>
                    <div className="form__group">
                        <label>Full name*</label><input type="text" name="full-name" className="form__control" id="full-name-taxacc" aria-required="true" aria-invalid="false" />
                    </div>
                    <div className="form__group">
                        <label>Email*</label><input type="email" name="email" className="form__control" id="email-taxacc" aria-required="true" aria-invalid="false" />
                    </div>
                    <div className="form__group">
                        <label>Company</label><input type="text" name="company" className="form__control" id="company-taxacc" aria-invalid="false" />
                    </div>
                    <div className="form__group">
                        <p className="form-label">*Required field</p>
                    </div>
                    <p><input type="submit" value="Sign up now" className="btn form__submit" /></p>
                </form>
            </div>
        </div>     
        </>
    );
};

const DarkModalApi = () => {
    return(
        <>
            <div className="modal__body">
                <div className="text-center">
                    <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul></ul>
                    </div>
                    <form className="init">
                        <h2>Let's get you started using our API!</h2>
                        <p>Apply for early access and we'll get back to you.</p>
                        <div className="form__group">
                            <label>Full name*</label>
                            <input type="text" name="full-name" className="form__control" id="full-name-api" />
                        </div>
                        <div className="form__group">
                            <label>Email*</label>
                            <input type="email" name="email" className="form__control" id="email-api" />
                        </div>
                        <div className="form__group">
                            <label>Company</label>
                            <input type="text" name="company" className="form__control" id="company-api" />
                        </div>
                        <div className="form__group">
                            <label>Website</label>
                            <input type="text" name="website" className="form__control" id="website-api" /> 
                        </div>
                        <div className="form__group">
                            <label>Tell us how you want to use our service</label>
                            <textarea name="message" cols="40" rows="4" className="form__control" id="message-api"></textarea>
                        </div>
                        <div className="form__group">
                            <p className="form-label">*Required field</p>
                        </div>
                        <p><input type="submit" value="Sign up now" className="btn form__submit" /></p>
                    </form>
                </div>
            </div>
        </>
    );
};
export {DarkModal, VideoModal, DarkModalApi, TopBottomLeftRight};
