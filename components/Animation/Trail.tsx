import React from 'react';
import { useTrail, animated } from 'react-spring';
import { css, keyframes } from '@emotion/react';

interface ListTrailProps {
  length: number;
  options: Record<string, unknown>;
  element?: string;
  setItemContainerProps?: (index: number) => Record<string, unknown>;
  renderItem: (index: number) => React.ReactNode;
}

export const ListTrail: React.FC<ListTrailProps> = ({
  length,
  options,
  element = 'li',
  setItemContainerProps = () => ({}),
  renderItem,
}) => {
  const C = animated[element];
  const trail = useTrail(length, {
    config: { mass: 2, tension: 280, friction: 24, clamp: true },
    ...options,
  });

  return (
    <>
      {trail.map((style, index) => {
        return (
          <div css={CategoriesStyle} key={index}>
            <C style={style} {...setItemContainerProps(index)}>
              {renderItem(index)}
            </C>
          </div>
        );
      })}
    </>
  );
};

export const CategoriesStyle = css({
  marginBottom: '6rem',
  '@media (max-width: 1000px)': {
    marginTop: '0rem',
    marginBottom: '3rem',
    '@media (max-width: 768px)': {
      marginBottom: '2rem',
    },
  },
});
