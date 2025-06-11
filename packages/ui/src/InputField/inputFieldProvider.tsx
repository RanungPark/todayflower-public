import {createContext, useContext, useMemo} from 'react';

type InputStatus = 'default' | 'success' | 'error';

interface ContextType {
  status: InputStatus;
}

const InputFieldContext = createContext<ContextType | null>(null);

export function InputFieldProvider({children, status}: {children: React.ReactNode; status: InputStatus}) {
  const value = useMemo(() => ({status}), [status]);

  return <InputFieldContext.Provider value={value}>{children}</InputFieldContext.Provider>;
}

export const useInputField = () => {
  const context = useContext(InputFieldContext);
  if (!context) {
    throw new Error('InputFieldProvider 내부에서 사용해야 합니다.');
  }
  return context;
};
