import {
  Components,
  Palette,
  PaletteOptions,
  Shadows,
  createTheme as createMuiTheme,
} from "@mui/material";
import { createPalette } from "./createPalette";
import { createComponents } from "./createComponents";
import { createShadows } from "./createShadows";
import { createTypography } from "./createTypography";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const createTheme = () => {
  const palette = createPalette() as PaletteOptions;
  // const components = createComponents({ palette });
  const components = createComponents({ palette }) as Components; // Specify the type of `components`

  const shadows = createShadows() as Shadows;
  const typography = createTypography() as TypographyOptions;

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8,
    },
    typography,
  });
};

export default createTheme;
