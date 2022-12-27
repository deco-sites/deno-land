/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugin:{

  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#12124B",
      "primary-dark": "#003232",
      "primary-light": "#0A4BAB",
      "primary-super-light": "#209DEE",
      transparent: "transparent",
      secondary: "white",
      "azure": "#E1F8FF"
      
    },
    fontFamily: {
      sans: ["ui-sans-serif", "sans-serif"],
      serif: ["serif"]
    },
    backgroundImage: (theme) => ({
      // Use a own gradient
      'gradient-radial': `radial-gradient(${theme('colors.blue.500')}, ${theme(
        'colors.red.500',
      )});`,
      // Integrate with gradient colors stops (from-*, via-*, to-*)
      'gradient-15':
        'linear-gradient(.15turn, var(--tw-gradient-stops,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent)))',
    }),
  },
};
