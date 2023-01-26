/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Dentro da pasta 'src', qualquer pasta que tenha qualquer arquivo com a extensão .tsx
    './src/**/*.tsx',
    './index.html'
    // Esses 2 caminhos é para dizer onde poderei utilizar o tailwind 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
