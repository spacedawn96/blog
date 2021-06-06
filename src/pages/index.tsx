import ArticleList from '@/components/ArticleList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostList from '@/components/PostList';
import Previous from '@/components/Previous';
import { css } from '@emotion/react';
import Head from 'next/head';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <script src="/static/js/three.min.js"></script>
        <script src="/static/js/TweenLite.min.js"></script>
        <script src="/static/js/Math.js"></script>
        <script src="/static/js/EffectShell.js"></script>
        <script src="/static/js/RGBShiftEffect.js"></script>
        <script src="/static/js/imagesloaded.pkgd.min.js"></script>

        <link href="/static/css/reset.css" rel="stylesheet" type="text/css" />
        <link href="/static/css/common.css" rel="stylesheet" type="text/css" />
        <link href="/static/css/style1.css" rel="stylesheet" type="text/css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const container = document.body
              const itemsWrapper = document.querySelector('.grid')
          
              // Preload images
              const preloadImages = () => {
                  return new Promise((resolve, reject) => {
                      imagesLoaded(document.querySelectorAll('img'), resolve);
                  });
              };
              // And then..
              preloadImages().then(() => {
                  // Remove the loader
                  document.body.classList.remove('loading');
                  const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
              });
                  `,
          }}></script>
      </Head>
      <body className="body loading">
        <main className="app">
          <div className="frame">
            <div className="frame__demos">
              <a href="index.html" className="frame__demo frame__demo--current">
                Demo 1
              </a>
              <a href="index2.html" className="frame__demo">
                Demo 2
              </a>
              <a href="index3.html" className="frame__demo">
                Demo 3
              </a>
            </div>
            <div className="frame__wrap">
              <div className="frame__credits">
                <div className="credit-wrap">
                  <div className="frame__role">art direction / dev / photography</div>
                  <a
                    aria-label="credit-1"
                    rel="noopener"
                    target="_blank"
                    draggable="false"
                    href="https://twitter.com/niccolomiranda"
                    className="frame__link">
                    Niccolò miranda
                  </a>
                </div>
                <div className="credit-wrap">
                  <div className="frame__role">Development</div>
                  <a
                    aria-label="credit-2"
                    rel="noopener"
                    target="_blank"
                    draggable="false"
                    href="https://twitter.com/clementroche_"
                    className="frame__link">
                    Clément roche
                  </a>
                </div>
              </div>
              <div className="frame__title-wrap">
                <div className="frame__init">
                  <em className="italic">presents</em>
                </div>
                <div className="frame__title">
                  <span className="span_1">How to Create Motion Hover Effects</span>
                  <br />
                  <span className="span_2">with Image Distortions using Three.js</span>
                </div>
              </div>
              <div className="frame__links">
                <div className="frame__inner">
                  <a
                    aria-label="frame-link"
                    rel="noopener"
                    target="_blank"
                    draggable="false"
                    href="https://tympanus.net/Tutorials/Interactive3DCharacter/"
                    className="frame__link fl_1">
                    Previous demo
                  </a>
                  <a
                    aria-label="frame-article"
                    rel="noopener"
                    target="_blank"
                    draggable="false"
                    href="https://tympanus.net/codrops/?p=44003"
                    className="frame__link fl_1">
                    Article
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <a
                aria-label="link-1"
                target="_blank"
                rel="noopener"
                draggable="false"
                className="link w-inline-block">
                <h1 className="h1">montmartre</h1>
                <div className="text">cemetery, paris</div>
                <img
                  className="content__img"
                  src="/static/img/demo1/img1.jpg"
                  alt="img1"
                />
              </a>
              <div className="divider"></div>
              <a
                aria-label="link-2"
                target="_blank"
                rel="noopener"
                draggable="false"
                className="link w-inline-block">
                <h1 className="h1">bir-hakem</h1>
                <div className="text">bridge, paris</div>
                <img
                  className="content__img"
                  src="/static/img/demo1/img2.jpg"
                  alt="img2"
                />
              </a>
            </div>
            <div className="grid-items g2">
              <div className="divider d2"></div>
              <a
                aria-label="link-3"
                target="_blank"
                rel="noopener"
                draggable="false"
                className="link w-inline-block">
                <h1 className="h1">république</h1>
                <div className="text">people, paris</div>
                <img
                  className="content__img"
                  src="static/img/demo1/img3.jpg"
                  alt="img3"
                />
              </a>
              <div className="divider d3"></div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
