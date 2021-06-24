import { css } from '@emotion/react';
import Footer from '../Footer';
import Header from '../Header';
import { SEO } from '../Common';

export type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

const AppLayoutBlock = css({});
