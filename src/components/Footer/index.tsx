import { css } from '@emotion/react';

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div css={FooterStyle}>
      <div>snippet</div>
    </div>
  );
}
const FooterStyle = css({});
