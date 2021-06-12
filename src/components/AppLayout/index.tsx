import { css } from '@emotion/react';
import Footer from '../Footer';
import Header from '../Header';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js';

export type AppLayoutProps = {
  children: any;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div css={AppLayoutBlock}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

const AppLayoutBlock = css({});
