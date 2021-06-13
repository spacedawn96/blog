const optimizedImages = require('next-optimized-images');
const path = require('path');
const withImages = require('next-images');
const Dotenv = require('dotenv-webpack');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

function getBasePath() {
  var basePath = '';

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith('/')) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = '/' + process.env.BASE_PATH;
    }
  }

  console.log('getBasePath() : isProd = ' + isProd);
  console.log('getBasePath() : basePath = ' + basePath);

  return basePath;
}

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // distDir: 'build',
  webpack: config => {
    //   config.plugins = config.plugins || [];
    //   // config.plugins.push(
    //   //   new Dotenv({
    //   //     path: path.join(__dirname, '.env'),
    //   //     systemvars: true,
    //   //   }),
    //   // );
    //   // config.plugins.push(
    //   //   new CompressionPlugin({
    //   //     filename: '[path].gz[query]',
    //   //     algorithm: 'gzip',
    //   //     test: /\.(js|css|html|svg)$/,
    //   //     threshold: 8192,
    //   //     minRatio: 0.8,
    //   //   }),
    //   // );
    //   // config.plugins.push(
    //   //   new BrotliPlugin({
    //   //     asset: '[path].br[query]',
    //   //     test: /\.(js|css|html|svg)$/,
    //   //     threshold: 10240,
    //   //     minRatio: 0.8,
    //   //   }),
    //   // );
    //   // config.plugins.push(
    //   //   new BundleAnalyzerPlugin({
    //   //     analyzerMode: 'static',
    //   //     generateStatsFile: true,
    //   //     statsOptions: { source: false },
    //   //     analyzerPort: 4000,
    //   //   }),
    //   // );
    return config;
  },
};
module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
          },
        },
      },
    ],
    [
      {
        transpileModules: ['p-retry', 'entities'],
      },
    ],
    [
      withImages,
      {
        inlineImageLimit: 16384,
        exclude: path.resolve(__dirname, 'src/svgs'),
      },
    ],
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          url: false,
        },
        module: {
          loaders: [
            {
              test: /plugin\.css$/,
              loaders: ['style-loader', 'css'],
            },
          ],
        },
      },
    ],
    [
      withSass,
      {
        cssModules: true,
      },
    ],
  ],

  nextConfig,
);
