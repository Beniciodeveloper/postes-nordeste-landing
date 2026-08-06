import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#D32F2F',
					foreground: '#FFFFFF',
					hover: '#B71C1C',
					light: '#FFEBEE'
				},
				secondary: {
					DEFAULT: '#0F172A',
					foreground: '#FFFFFF',
					hover: '#1E293B'
				},
				accent: {
					DEFAULT: '#1E293B',
					foreground: '#F8FAFC',
					gold: '#D97706'
				},
				muted: {
					DEFAULT: '#F1F5F9',
					foreground: '#64748B'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				postes: {
					red: '#D32F2F',
					'red-dark': '#9A0007',
					'red-light': '#FF6659',
					navy: '#0F172A',
					'navy-light': '#1E293B',
					steel: '#334155',
					gray: '#64748B',
					'gray-light': '#F8FAFC',
					'gray-border': '#E2E8F0',
				}
			},
			fontFamily: {
				sans: ['Inter', 'Montserrat', 'sans-serif'],
				heading: ['Montserrat', 'Inter', 'sans-serif'],
			},
			boxShadow: {
				'glow-red': '0 0 25px rgba(211, 47, 47, 0.25)',
				'glow-navy': '0 0 25px rgba(15, 23, 42, 0.15)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
				'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.12)',
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.375rem'
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				}
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'float': 'float 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
