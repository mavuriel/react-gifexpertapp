// module.exports =
export default {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['babel-preset-vite', { env: true }],
  ],
  plugins: ['babel-plugin-transform-import-meta'],
}
