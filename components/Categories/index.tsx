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

export type CategoriesProps = {
  filterList: InitialStateItem[];
};

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

export default function Categories(props: CategoriesProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div css={listWapper}>
      <ListTrail
        length={props.filterList?.length}
        options={{
          opacity: 1,
          height: 37,
          x: 0,
          from: { opacity: 0, height: 0, x: -20 },
        }}
        setItemContainerProps={index => ({})}
        renderItem={index => {
          const category = props.filterList[index];
          return category.name ? (
            <Link href={{ pathname: `${category.name.replace(/ /g, '')}` }}>
              <nav className="menu">
                <div className="menu__item">
                  <div className="menu__item-link">{category.name}</div>
                  <img
                    className="menu__item-img"
                    src={category.url}
                    alt="Some image"
                    css={listImg}
                  />
                  <div className="marquee">
                    <div className="marquee__inner" aria-hidden="true">
                      <span>{category.name}</span>
                      <span>{category.name}</span>
                      <span>{category.name}</span>
                      <span>{category.name}</span>
                    </div>
                  </div>
                </div>
              </nav>
            </Link>
          ) : (
            'welcome!'
          );
        }}
      />
    </div>
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
    fontSize: '4rem',
    margin: '0 6% 0 6% ',
  },
  '@media (max-width: 576px)': {
    fontSize: '2.5rem',
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

export const listImg = css({
  '@media (max-width: 1000px)': {
    display: 'none',
  },
});

export const listWapper = css({
  fontSize: '10rem',
  margin: '0 6% 0 10% ',
  '@media (max-width: 1000px)': {
    fontSize: '6rem',
    margin: '0 6% 0 6% ',
  },
  '@media (max-width: 576px)': {
    fontSize: '3rem',
    margin: '0 6% 0 6% ',
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
