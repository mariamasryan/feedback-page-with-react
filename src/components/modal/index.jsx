import "./style.scss";
import OutsideClickHandler from "react-outside-click-handler";
import confirmIcon from "@/assets/images/check.png";

export const Modal = ({ close }) => {
  const handleOutsideClick = () => {
    close(false);
  };
  // to close modal when user click on out of modal's body
  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <div className="modal-container">
        <div className="modal">
            <div className="close" onClick={handleOutsideClick}>Close</div>
          <div className="title-parent">
            <strong className="title">Your feedback <br /> is valuable to us!</strong>
            <strong className="message">Your message is sent!</strong>
            <p className="text-message">We will contact you as soon as possible.</p>
          </div>
          <div className="image">
          <img src={confirmIcon} alt="" width="100" />
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
