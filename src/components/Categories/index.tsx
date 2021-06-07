import { css, keyframes } from '@emotion/react';
import { SelectContext } from '../../lib/context';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from './index.module.css';

export type CategoriesProps = {};

export type TitleProps = {
  title: any;
  setActiveIndex?: any;
  index: any;
  activeIndex?: any;
  active?: any;
  x?: any;
  y?: any;
};

const initialState = {
  filterList: [
    {
      id: 1,
      name: 'javascript',
      url: '/javascript.png',
    },
    {
      id: 2,
      name: 'typescript',
      url: '/typescript.png',
    },
    {
      id: 3,
      name: 'react',
      url: '/database.png',
    },
    {
      id: 4,
      name: 'http',
      url: '/http.png',
    },
  ],
  activeFilter: [],
};

const TitleBlock = css({
  '&:hover': {
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

function Title(props: TitleProps) {
  return (
    <div
      className="project-list"
      css={TitleBlock}
      onMouseEnter={() => props.setActiveIndex(props.index)}
      onMouseLeave={() => props.setActiveIndex(-1)}>
      <div css={ProjectTitle} className="project-title">
        <span> {props.title.name}</span>
      </div>
    </div>
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
        src={props.title.url}
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
  const [activeIndex, setActiveIndex] = useState(-1);

  const { x, y } = useMousePosition();

  return (
    <main css={CategoriesStyle}>
      <div css={ProjectList}>
        {initialState?.filterList.map((title, index) => (
          <Title
            title={title}
            setActiveIndex={setActiveIndex}
            index={index}
            key={title.id}
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
  marginBottom: '8px',
  fontWeight: 600,
  // img: {
  //   display: 'none',
  // },
});

export const ListWapper = css({});

export const ProjectList = css({
  // mixBlendMode: 'difference',
  zIndex: 1,
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
