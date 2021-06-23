import { createContext, useReducer } from 'react';

interface PostSubTitleItem {
  id?: number;
  postTitle?: string;
  date?: string;
  linkTo?: string;
}

interface PostItem {
  id: number;
  title: string;
  subtitle: PostSubTitleItem[];
}

export interface InitialStateItem {
  id: number;
  name: string;
  url: string;
  descriable: string;
  post?: PostItem[];
}

interface InitialState {
  filterList: InitialStateItem[];
  activeFilter: string[];
  currentState: string[];
}

export const initialState: InitialState = {
  filterList: [
    {
      id: 1,
      name: 'React',
      url: '/javascript.png',
      descriable: `
      React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. `,
    },
    {
      id: 2,
      name: 'Javascript',
      url: '/javascript.png',
      descriable: `
      JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.`,
      post: [
        {
          id: 1,
          title: '',
          subtitle: [],
        },
        {
          id: 2,
          title: '',
          subtitle: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Typescript',
      url: '/typescript.png',
      descriable: `
      TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

      Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

      Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.`,
      post: [
        {
          id: 1,
          title: 'Typescript Types',
          subtitle: [
            {
              id: 1,
              postTitle: 'L 1. Baisc Type',
              date: '2021/06/17',
              linkTo: 'typescriptType',
            },
            {
              id: 2,
              postTitle: 'L 2. Funtion Type',
              date: '2021/06/18',
              linkTo: 'typescriptFunction',
            },
          ],
        },
        {
          id: 2,
          title: 'Typescript advance',
          subtitle: [
            {
              id: 1,
              postTitle: 'L 1. Advance Types',
              date: '2021/06/20',
              linkTo: 'typescriptAdvanceType',
            },
          ],
        },
      ],
    },
  ],
  activeFilter: [],
  currentState: [],
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
