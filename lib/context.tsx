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
          title: 'Javascript',
          subtitle: [
            {
              postTitle: 'L First post',
              date: '2021/09/21',
              linkTo: 'coding-post',
            },
            {
              postTitle: 'L First post22',
              date: '2021/09/21',
              linkTo: 'first-post',
            },
            {
              postTitle: 'L First post33',
              date: '2021/09/21',
              linkTo: 'long-post',
            },
            {
              postTitle: 'R First post33',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'R First post33',
              date: '2021/09/21',
              linkTo: '4.http',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: 'coding-post',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: 'first-post',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: 'long-post',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
      post: [
        {
          id: 1,
          title: 'javascript',
          subtitle: [
            {
              postTitle: 'first post',
              date: '2021/09/21',
              linkTo: '1.javascript',
            },
            {
              postTitle: 'first post22',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
            {
              postTitle: 'first post33',
              date: '2021/09/21',
              linkTo: '2.typescript',
            },
          ],
        },
        {
          id: 2,
          title: 'sub2',
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
