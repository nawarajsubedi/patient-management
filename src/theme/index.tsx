import {
  Components,
  Palette,
  PaletteOptions,
  Shadows,
  createTheme as createMuiTheme,
} from "@mui/material";
import { createPalette } from "./create-palette";
import { createComponents } from "./create-components";
import { createShadows } from "./create-shadows";
import { createTypography } from "./create-typography";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export function createTheme() {
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
}
