import { css } from '@emotion/react';
import Footer from '../Footer';
import Header from '../Header';

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
