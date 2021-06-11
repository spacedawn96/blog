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
      post: {
        javascript: [
          {
            id: 1,
            title: 'javascript',
            subtitle: [
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
            ],
          },
          {
            id: 2,
            title: 'typescript',
            subtitle: [
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
              {
                postTitle: 'first post',
                date: '2021/09/21',
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Typescript',
      url: '/typescript.png',
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
    },
    {
      id: 3,
      name: 'React',
      url: '/database.png',
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
    },
    {
      id: 4,
      name: 'Http',
      url: '/http.png',
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
    },
    {
      id: 5,
      name: 'Database',
      url: '/database.png',
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
    },
    {
      id: 6,
      name: 'Node js',
      url: '/database.png',
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
    },
    {
      id: 7,
      name: 'Optimization',
      url: '/database.png',
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
    },
    {
      id: 8,
      name: 'Network',
      url: '/database.png',
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
    },
    {
      id: 9,
      name: 'SQL',
      url: '/database.png',
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
