import { css } from '@emotion/react';

export type TagsProps = {};

export default function Tags({}: TagsProps) {
  return (
    <div css={TagsStyle}>
      <div>snippet</div>
    </div>
  );
}
const TagsStyle = css({});
