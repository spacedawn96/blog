import { css, keyframes } from '@emotion/react';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Fiber from '../Fiber';
import { SelectContext } from '../../lib/context';

export type CategoriesProps = {};

export type TitleProps = {
  list: any;
  setActiveIndex?: any;
  activeIndex?: any;
  active?: any;
  x?: any;
  y?: any;
  dispatch: any;
  filterList: any;
  activeFilter: any;
  currentState: any;
};

const fadeinHover = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const TitleBlock = css({
  '&:hover': {
    transition: 'color 0.5s ease',
    color: '#ff4400',
  },
});

const MedeiaBlock = css({});

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

//onMouseEnter={() => props.setActiveIndex(props.index)}
//onMouseLeave={() => props.setActiveIndex(-1)}
function Title(props: TitleProps) {
  const TrimTitle = props.list.name.replace(/ /g, '');

  return (
    <Link href={{ pathname: `${TrimTitle}` }}>
      <div className="project-list" css={TitleBlock}>
        <div css={ProjectTitle} className="project-title">
          <span> {props.list.name}</span>
        </div>
      </div>
    </Link>
  );
}

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
  } = useContext(SelectContext) as any;

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <main css={CategoriesStyle}>
      <div css={ProjectList}>
        {filterList.map((list: any) => (
          <Title
            list={list}
            setActiveIndex={setActiveIndex}
            dispatch={dispatch}
            key={list.id}
            filterList={filterList}
            activeFilter={activeFilter}
            currentState={currentState}
          />
        ))}
      </div>

      {/* <div css={MediaContainer}>
        {initialState?.filterList.map((title, index) => {
          const isActive = index == activeIndex;
          const xPos = isActive ? x : 0;
          const yPos = isActive ? y : 0;
          return (
            <Media
              active={isActive}
              title={title}
              index={index}
              x={xPos}
              y={yPos}
              key={title.id}
            />
          );
        })}
      </div> */}
      {/* <div css={FiberBlock}>
          <Fiber />
        </div> */}
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
    fontSize: '32px',
    margin: '0 6% 0 6% ',
  },
});

export const FiberBlock = css({
  marginLeft: '10%',
});

export const ProjectList = css({
  // mixBlendMode: 'difference',
  marginBottom: '6rem',
  zIndex: 1,
  '@media (max-width: 1000px)': {
    marginBottom: '3rem',
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
