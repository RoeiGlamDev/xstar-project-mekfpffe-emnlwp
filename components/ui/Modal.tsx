import React from 'react';
import './Modal.css'; // Assuming you have a CSS file for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // If modal is not open, return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;