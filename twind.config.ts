/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "card-shadow": {
      "box-shadow": "0px 4px 4px rgb(0 0 0 / 25%)",
    },
    "polygon": {
      "box-shadow": "0px",
      "clip-path":
        "polygon(calc(50% - 15px * 2 / 3) 15px,50% 0,calc(50% + 15px * 2 / 3) 15px)",
    },
    "colorWash": {
      "background-image": "linear-gradient(to right,var(--tw-gradient-stops))",
      "--tw-gradient-from": "#002585",
      "--tw-gradient-stops":
        "var(--tw-gradient-from),var(--tw-gradient-to,rgba(0,37,133,0))",
      "--tw-gradient-to": "#209DEE",
      "background-repeat": " no-repeat",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    "teste[open]": {
      "margin-top": "50px",
    },
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
      "2xl": "1536px",
    },
    colors: {
      "primary-blue": "#12124B",
      primary: "#056CF0",
      "primary-opacity": "#3587EF",
      "blue-dark": "#12124B",
      "blue-light": "#0A4BAB",
      "blue-super-light": "#209DEE",
      "blue-grey": "#E1ECF2",
      transparent: "transparent",
      secondary: "white",
      "secondary-grey": "#F3F3F3",
      "azure": "#E1F8FF",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["sans-serif"],
    },
    backgroundImage: (theme) => ({
      // Use a own gradient
      "gradient-radial": `radial-gradient(${theme("colors.blue.500")}, ${
        theme(
          "colors.red.500",
        )
      });`,
      // Integrate with gradient colors stops (from-*, via-*, to-*)
      "gradient-15":
        "linear-gradient(.15turn, var(--tw-gradient-stops,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent)))",
    }),
  },
};
