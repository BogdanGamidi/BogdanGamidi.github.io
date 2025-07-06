import React from 'react';
import './modal-dialog.css';

type ModalDialogProps = {
  /**
   * If visible is 'true' then the modal dialog is displayed
   */
  visible: boolean;
  /**
   * The modal dialog can take in any type of children
   */
  children: React.ReactNode;
};

/**
 * Primary UI component for user interaction
 */
export const ModalDialog = (props: ModalDialogProps) => {
  const { visible, children } = props;

  if (!visible) return null;

  return (
    <div className="modal-dialog-mask">
      <div className="modal-dialog-container">
        <button type="button" className="modal-dialog-close">
          Close
        </button>
        <div className="modal-dialog-content">{children}</div>
      </div>
    </div>
  );
};
