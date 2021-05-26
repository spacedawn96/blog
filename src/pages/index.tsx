import Header from '@/components/Header';
import { css } from '@emotion/react';

const titleStyle = css({});

const subtitleStyle = css`
  box-sizing: border-box;
  width: 100px;
  height: 60px;
`;

export default function Home() {
  return (
    <div css={titleStyle}>
      <Header />
    </div>
  );
}
