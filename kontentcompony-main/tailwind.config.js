/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'bg-primary': '#1B1B1B',
  			'bg-secondary': '#323232',
  			beige: '#FFE7D0',
  			orange: '#FC6E20',
  			'orange-dim': 'rgba(252,110,32,0.15)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Schibsted Grotesk',
  				'sans-serif'
  			],
  			body: [
  				'Schibsted Grotesk',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			'pill': '999px',
  			'xl2': '1.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'card-send-to-back': {
  				'0%': {
  					transform: 'rotate(0deg) translateY(0) scale(1)',
  					opacity: '1'
  				},
  				'25%': {
  					transform: 'rotate(-1.5deg) translateY(10px) scale(0.98)',
  					opacity: '0.95'
  				},
  				'60%': {
  					transform: 'rotate(-3deg) translateY(36px) scale(0.93)',
  					opacity: '0.55'
  				},
  				'100%': {
  					transform: 'rotate(-4deg) translateY(52px) scale(0.88)',
  					opacity: '0'
  				}
  			},
  			'card-send-to-back-rev': {
  				'0%': {
  					transform: 'rotate(0deg) translateY(0) scale(1)',
  					opacity: '1'
  				},
  				'25%': {
  					transform: 'rotate(1.5deg) translateY(10px) scale(0.98)',
  					opacity: '0.95'
  				},
  				'60%': {
  					transform: 'rotate(3deg) translateY(36px) scale(0.93)',
  					opacity: '0.55'
  				},
  				'100%': {
  					transform: 'rotate(4deg) translateY(52px) scale(0.88)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'card-exit-next': 'card-send-to-back 0.5s cubic-bezier(0.4,0,0.6,1) forwards',
  			'card-exit-prev': 'card-send-to-back-rev 0.5s cubic-bezier(0.4,0,0.6,1) forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
