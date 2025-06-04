"use client";

import { useState, useEffect, useRef } from "react";

export default function ConnectDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        closeModal();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button onClick={openModal} className="connect-button">CONNECT WITH US</button>

      {isOpen && (
        <div ref={modalRef} className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>
              <strong>Let’s connect, Tams! </strong> <br />
              <span>You can reach out to us <br /> through our official channels:</span>
            </h3>
            <h6>OUR SOCIAL MEDIA CHANNELS:</h6>
            <div className="row row-fb">
              <a href="https://www.facebook.com/feucentralstudentorganization" target="_blank" rel="noopener noreferrer">
                <img src="/home/facebook.svg" className="quick-icons" alt="FB Icon" />
              </a> FEU Central Student Organization
              <a href="https://www.instagram.com/feu_cso" target="_blank" rel="noopener noreferrer">
                <img src="/home/instagram.svg" className="quick-icons insta" alt="Insta Icon" />
              </a>
              <a href="https://www.twitter.com/feu_cso" target="_blank" rel="noopener noreferrer">
                <img src="/home/x-twitter.svg" className="quick-icons" alt="Twit Icon" />
              </a> feu_cso
            </div>
            <div className="row">
              <a href="https://www.messenger.com/t/166725233458654" target="_blank" rel="noopener noreferrer">
                <img src="/home/facebook-messenger.svg" className="quick-icons" alt="Mes Icon" />
              </a> Want to chat us? <a href="https://www.messenger.com/t/166725233458654" className="click-link" target="_blank" rel="noopener noreferrer">Click here</a>
            </div>
            <hr className="my-[2vw]" />
            <div className="row">
              <div className="column column-main-mail">
                <h6>OUR MAIN EMAIL:</h6>
                <div className="email-row">
                  <img src="/home/envelope.svg" className="mail-icon" />
                  <span>feucso@feu.edu.ph</span>
                </div>
              </div>
              <div className="column column-ext-mail">
                <h6>FOR EXTERNAL PARTNERSHIPS:</h6>
                <div className="email-row">
                  <img src="/home/envelope.svg" className="mail-icon" />
                  <span>feucso@feu.edu.ph</span>
                </div>
              </div>
              <div className="column column-spon-mail">
                <h6>FOR SPONSORSHIPS:</h6>
                <div className="email-row">
                  <img src="/home/envelope.svg" className="mail-icon" />
                  <span>feucso@feu.edu.ph</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}