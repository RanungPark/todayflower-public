import {createContext, useContext, useMemo, useState} from 'react';

interface ContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const SelectBoxContext = createContext<ContextType | null>(null);

export function SelectBoxProvider({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = useMemo(() => ({open, handleOpen, handleClose}), [open]);

  return <SelectBoxContext.Provider value={value}>{children}</SelectBoxContext.Provider>;
}

export const useSelectBox = () => {
  const context = useContext(SelectBoxContext);
  if (!context) {
    throw new Error('SelectBoxProvider 내부에서 사용해야 합니다.');
  }
  return context;
};
