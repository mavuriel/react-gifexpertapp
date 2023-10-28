// module.exports
export default {
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts'],
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
}
