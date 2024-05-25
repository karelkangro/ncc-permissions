// Dialog.js
import { useRef, useEffect } from 'react';
import { DialogContainer } from './Dialog.styled';

interface IDialog {
  isOpen: boolean;
  toggleDialog: () => void;
  children: React.ReactNode;
}

export const Dialog = ({ isOpen, toggleDialog, children }: IDialog) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      toggleDialog();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <DialogContainer ref={dialogRef}>
      {children}
    </DialogContainer>
  );
};