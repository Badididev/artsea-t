// /** @type {import('postcss-load-config').Config} */
// const config = {

//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'autoprefixer',
//     "@tailwindcss/postcss": {},
//     tailwindcss: {},
//     process.env.NODE_ENV === 'production'
//       ? [
//           '@fullhuman/postcss-purgecss',
//           {
//             content: [
//               './src/pages/**/*.{js,jsx,ts,tsx}',
//               './src/components/**/*.{js,jsx,ts,tsx}',
//               './public/index.html',
//             ],
//             defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
//             safelist: {
//               standard: ['html', 'body', /^swiper-/],
//               deep: [/^aos-/, /^gsap-/],
//               greedy: [/^react-modal-video/, /^slick-/]
//             }
//           },
//         ]
//       : false,
//   ].filter(Boolean),
// };

// export default config;
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {}, // ✅ Correct plugin
    autoprefixer: {}
  }
};

export default config;
