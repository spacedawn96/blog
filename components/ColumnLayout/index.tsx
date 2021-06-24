import { css } from '@emotion/react';
import Link from 'next/link';
import Header from '../Header';

export type CloumnLayout = {
  leftNode: React.ReactNode;
  rightNode: React.ReactNode;
};

export default function CloumnLayout(props: CloumnLayout) {
  return (
    <>
      <Header />
      <div css={CloumnLayoutBlock}>
        <section css={CloumnLayoutLedft}>{props.leftNode}</section>
        <aside css={CloumnLayoutWrapper}>{props.rightNode}</aside>
      </div>
    </>
  );
}

const CloumnLayoutLedft = css({
  width: '100%',
});

const CloumnLayoutBlock = css({
  display: 'flex',
  width: '100%',
  alignContent: 'flex-start',
});

const CloumnLayoutWrapper = css({
  position: 'absolute',
  left: '55%',
});
