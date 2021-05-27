import { css } from '@emotion/react';

export type SearchProps = {};

export default function Search({}: SearchProps) {
  return (
    <div css={SearchStyle}>
      <div>snippet</div>
    </div>
  );
}
const SearchStyle = css({});
