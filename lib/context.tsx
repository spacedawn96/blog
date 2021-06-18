import { createContext, useReducer } from 'react';

interface InitialStateItem {
  id: number;
  name: string;
  url: string;
  descriable: string;
  post?: any;
}

interface InitialState {
  filterList: InitialStateItem[];
  activeFilter: any;
  currentState: any;
}

const initialState: InitialState = {
  filterList: [
    {
      id: 1,
      name: 'Javascript',
      url: '/javascript.png',
      descriable: `
      This was a dream project and an honor to represent Walt’s wonderful
      creation: Mickey Mouse, an American icon. When I received the proposal from
      the Walt Disney Company to paint 100 Mickey’s (in 2002), I packed up my
      paints and brushes and flew to a little island in the Caribbean. Inspired by
      nature’s colors — and the occasional plunge in the river — I returned two
      weeks later with the first 21 mice. That was the easy part. The next 79 were
      more challenging and took 16 months to finish. The challenge was to make
      each one a different pose, style, or medium, as well as paying homage to the
      history of Mickey Mouse.`,
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
      id: 2,
      name: 'Typescript',
      url: '/typescript.png',
      descriable: `
      TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

      Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

      Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.`,
      post: [
        {
          id: 1,
          title: 'Typescript 타입',
          subtitle: [
            {
              postTitle: 'L Typescript 타입',
              date: '2021/06/17',
              linkTo: 'typescript',
            },
          ],
        },
        {
          id: 2,
          title: '',
          subtitle: [
            {
              postTitle: 'second post',
              date: '2021/09/21',
            },
            {
              postTitle: 'second post22',
              date: '2021/09/21',
            },
            {
              postTitle: 'second post33',
              date: '2021/09/21',
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
