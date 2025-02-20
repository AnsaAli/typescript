
//use this as the context, and set this in the Box
export const theme = {
    primary :{
        main : "#3f51b5",
        text : "#fff"
    },
    secondary : {
        main : "#f50057",
        text : "#fff"
    }

}

export type Theme = typeof theme

//another way using interface
interface Theme1 {  // Define the interface
    primary: { main: string; text: string; };
    secondary: { main: string; text: string; };
  }
  export const theme1: Theme = { // Create the theme object AND type it with the interface
    primary: {
      main: "#3f51b5",
      text: "#fff",
    },
    secondary: {
      main: "#f50057",
      text: "#fff",
    },
  };
  export type ThemeType = Theme1;