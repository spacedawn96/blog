import { createContext, useReducer } from 'react';

interface InitialStateItem {
  id: number;
  name: string;
}

interface InitialState {
  filterList: InitialStateItem[];
  activeFilter: any;
}

const initialState: InitialState = {
  filterList: [
    {
      id: 1,
      name: 'javascript',
    },
    {
      id: 2,
      name: 'typescript',
    },
    {
      id: 3,
      name: 'react',
    },
    {
      id: 4,
      name: 'http',
    },
  ],
  activeFilter: [],
};

function reducer(state: InitialState, action: any) {
  return { ...state, ...action };
}
export const SelectContext = createContext(null);

const SelectContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
