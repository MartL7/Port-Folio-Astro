module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended'
  ],
  plugins: ['@typescript-eslint', 'astro'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    // Puedes agregar reglas adicionales aquí si es necesario
  }
}
