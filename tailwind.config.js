module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'glitch-1': {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'skew(-2deg)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'skew(2deg)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        noise: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '20% 25%' },
          '50%': { backgroundPosition: '-25% 10%' },
          '60%': { backgroundPosition: '15% 5%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '25% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        tracking: {
          '0%': { top: '-100%' },
          '100%': { top: '100vh' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'glitch-1': 'glitch-1 2s infinite',
        'glitch-2': 'glitch-2 2s infinite',
        'glitch': 'glitch 0.3s linear forwards',
        'noise': 'noise 0.3s linear infinite',
        'tracking': 'tracking 10s linear infinite',
        'fadeIn': 'fadeIn 0.7s ease-in forwards',
        'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'radial-vignette': 'radial-gradient(circle, transparent 50%, rgba(15, 23, 42, 0.9) 150%)',
        'pattern-dots': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-pattern': '30px 30px',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
