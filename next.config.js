/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
// const withTM = require('next-transpile-modules')(['tailwindcss'])
// const tailwindCss = require('tailwindcss')

// module.exports = withTM(withCSS(withSass({
//     cssModules: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]___[hash:base64:5]",
//     },
//     postcssLoaderOptions: {
//         ident: 'postcss',
//         plugins: [
//             tailwindCss
//         ]
//     }
// })))
