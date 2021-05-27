import { css } from '@emotion/react';

export type SideProps = {};

export default function Side({}: SideProps) {
  return (
    <div css={SideStyle}>
      <div>snippet</div>
    </div>
  );
}
const SideStyle = css({});
