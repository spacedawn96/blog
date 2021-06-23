import { css, keyframes } from '@emotion/react';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import Link from 'next/link';
import Fiber from '../Fiber';
import { InitialStateItem, SelectContext } from '../../lib/context';
import { ListTrail } from '../Animation/Trail';

export type CategoriesProps = {};

export type TitleProps = {
  list: InitialStateItem;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
  activeIndex?: number;
  active?: boolean;
  x?: number;
  y?: number;
  filterList: InitialStateItem[];
  activeFilter: string[];
  currentState: string[];
};

const TitleBlock = css({
  width: '100%',

  '&:hover': {
    transition: 'color 0.5s ease',
    color: '#ff4400',
  },
});

const MedeiaBlock = css({});
const TitleWrapper = css({});

const ProjectTitle = css({
  transition: 'opacity .35s cubic-bezier(.77,0,0.175,1),',
  cursor: 'pointer',
});

const useMousePosition = () => {
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePostion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

const getDimensionObject = (node: { getBoundingClientRect: () => any } | null) => {
  const rect = node?.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
};
const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(node => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node));

      measure();
    }
  }, [node]);

  return [ref, dimensions];
};

function Media(props: TitleProps) {
  const [ref, { width, height }]: any = useSize();
  return (
    <div css={MedeiaBlock}>
      <img
        ref={ref}
        src={props.list.url}
        alt="js"
        width="100"
        height="100"
        style={{
          transform: `translate(${props.x - width / 2}px , ${props.y - height / 2}px )`,
        }}
        className={props.active && 'is-active' ? 'is-active' : ''}
      />
    </div>
  );
}

export default function Categories({}: CategoriesProps) {
  let {
    state: { filterList, activeFilter, currentState },
    dispatch,
  } = useContext(SelectContext);

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <main css={CategoriesStyle}>
      <div css={ProjectList}>
        {/* {filterList.map((list: InitialStateItem) => (
          <div key={list.id}>
            <Title
              list={list}
              setActiveIndex={setActiveIndex}
              filterList={filterList}
              activeFilter={activeFilter}
              currentState={currentState}
            />
          </div>
        ))} */}

        <ListTrail
          length={filterList.length}
          options={{
            opacity: 1,
            height: 37,
            x: 0,
            from: { opacity: 0, height: 0, x: -20 },
          }}
          setItemContainerProps={index => ({})}
          renderItem={index => {
            const category = filterList[index];
            return (
              <Link href={{ pathname: `${category.name.replace(/ /g, '')}` }}>
                <span css={TitleBlock}> {category.name}</span>
              </Link>
            );
          }}
        />
      </div>
    </main>
  );
}

export const CategoriesStyle = css({
  display: 'flex',
  // flexDirection: 'column',
  boxSizing: 'border-box',
  position: 'relative',
  color: '#292929',
  fontFamily: '"Rubik", "sans-serif"',
  fontSize: '6.25rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  fontWeight: 600,

  margin: '0 6% 0 10% ',

  // img: {
  //   display: 'none',
  // },
  '@media (max-width: 1000px)': {
    fontSize: '2rem',
    margin: '0 6% 0 6% ',
  },
});

export const FiberBlock = css({
  position: 'absolute',
  left: '60%',
});

export const ProjectList = css({
  // mixBlendMode: 'difference',
  marginBottom: '6rem',
  zIndex: 1,
  '@media (max-width: 1000px)': {
    marginTop: '0rem',
    marginBottom: '6rem',
  },
});

const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 0.4;
}
`;

export const MediaContainer = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',

  img: {
    opacity: 0,
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    maxHeight: '50%',
    maxWidth: '50%',
    objectFit: 'contain',

    '&.is-active': {
      opacity: 0.4,
      animation: `${fadein} 0.5s linear`,
      animationIterationCount: 1,
    },
  },
});
