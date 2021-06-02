import ArticleList from '@/components/ArticleList';
import Header from '@/components/Header';
import { css } from '@emotion/react';

export type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <div css={AboutStyle}>
      <Header />
      <ArticleList />
    </div>
  );
}
const AboutStyle = css({});
