/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

        keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate-x-[30rem]' },
          '50%': { transform: 'translate-x-[30rem]' },
        },

      },

      fontFamily: {

    'Poppins':'Roboto'
      },

      colors: {
        'grayx':'#9DC2C7',
        'divsec':'#61C9C9',
        'butcolor':'#198A8A',
        'prdcolor':'#167D7D',
        'regcolor':'#003136',
        'blackp': '#313634',
        'blue':'#027fe9',
      
    },

    spacing: {
      '15':'15px',
      '25':'25px',
      '30':'30px',
      '50':'50px',
      '60':'60px',
      '70':'70px',
      '100':'100px',
      '200':'200px',
      '250':'250px',
      '300':'300px',
      '400':'400px',
      '500':'500px',
      '600':'600px',
      '650':'650px',
      '700':'700px',
      '800':'800px',
      '900':'900px',
      '1000':'1000px',
      '2000':'2000px',

    },

   }
  },
  plugins: [],
}