import { css } from '@emotion/react';

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  return (
    <div css={ArticleListStyle}>
      <div>snippet</div>
    </div>
  );
}
const ArticleListStyle = css({});
