
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
			padding: '2rem',
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Refined brand colors - more strategic usage
				"brand": {
					25: "#FDFBFF", // Lightest brand tint
					50: "#F8F4FD", // Very light brand background
					100: "#F0E8FA", // Light brand background
					200: "#E1D1F5", // Lighter brand
					300: "#C4A3E8", // Medium light brand
					400: "#6F4E9C", // Primary brand (unchanged)
					500: "#5D4084", // Darker brand
					600: "#4A3267", // Deep brand
					700: "#292B32", // Near black
				},
				"accent": {
					50: "#FFF7F4", // Very light coral
					100: "#FEE8E1", // Light coral
					200: "#FBD0C4", // Lighter coral
					300: "#F8A78B", // Medium coral
					400: "#FF7E5F", // Primary coral/orange (unchanged)
					500: "#E65F42", // Darker coral
					600: "#D4452B", // Deep coral
				},
				"teal": {
					50: "#F0FCFC", // Very light teal
					100: "#E0F3F5", // Light teal
					200: "#C2E7EB", // Lighter teal
					300: "#85CED7", // Medium teal
					400: "#3CADA0", // Primary teal (unchanged)
					500: "#2A8F86", // Darker teal
					600: "#1F6F69", // Deep teal
				},
				// Neutral grays - main text colors
				"gray": {
					50: "#FAFAFA", // Lightest gray
					100: "#F5F5F5", // Very light gray
					200: "#E5E5E5", // Light gray
					300: "#D4D4D4", // Medium light gray
					400: "#A3A3A3", // Medium gray
					500: "#737373", // Standard gray
					600: "#525252", // Darker gray - body text
					700: "#404040", // Dark gray - headings
					800: "#262626", // Very dark gray
					900: "#171717", // Near black - main headings
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'slide-in': {
					from: {
						transform: 'translateY(10px)',
						opacity: '0'
					},
					to: {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-in-out',
				'slide-in': 'slide-in 0.4s ease-out'
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				display: ['Montserrat', 'sans-serif']
			},
			fontWeight: {
				'light': '300',
				'normal': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
