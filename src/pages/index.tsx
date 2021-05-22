import { css } from '@emotion/react';

const titleStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  color: 'red',
});

const subtitleStyle = css`
  box-sizing: border-box;
  width: 100px;
  height: 60px;
`;

export default function Home() {
  return (
    <div css={titleStyle}>
      <div>hello</div>
    </div>
  );
}
