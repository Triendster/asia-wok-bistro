import React from "react";
import "./Footer.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "none",
    padding: "0",
    transform: "translate(-50%, -50%)",
    width: "40vw",
  },
};

Modal.setAppElement("#root");

function Footer() {
  const [modalOpen, setModalOpen] = React.useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <footer className="footer-container">
      <div className="footer-container-content">
        <button onClick={openModal} className="footer-content-button">
          Impressum
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Impressum"
          style={customStyles}
        >
          <div className="modal-container">
            <div className="modal-close">
              <div className="modal-close__empty"></div>
              <div className="modal-close__symbols">
                <div className="modal-close__symbols__close">
                  <button
                    className="modal-close__symbols__button"
                    onClick={closeModal}
                  ></button>
                </div>
              </div>
            </div>
            <div className="modal-content">
              <h1 className="modal-content__title">Impressum</h1>
              <h2 className="modal-content__info">
                Asia-Wok-Bistro (haftungsbeschränkt)
              </h2>
              <h2 className="modal-content__info">Inhaber: Than Thien Phan</h2>
              <h2 className="modal-content__info">
                Stauffenbergstraße 10, 07747 Jena
              </h2>
              <h2 className="modal-content__info">Telefon: 03641 815 99 95</h2>
            </div>
          </div>
        </Modal>
      </div>
    </footer>
  );
}

export default Footer;
