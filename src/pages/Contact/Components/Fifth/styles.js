const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: (theme) => theme.palette.default.white,
    color: (theme) => theme.palette.common.white,
    py: (theme) => ({
      xs: theme.spacing(48),
      sm: theme.spacing(56),
      md: theme.spacing(96),
    }),
    px: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
  center: {
    m: (theme) => theme.spacing("auto"),
    maxWidth: 768,
    textAlign: "center",
    "& .MuiTypography-root": {
      color: (theme) => theme.palette.default.darkGreen,
      lineHeight: (theme) => theme.spacing(52),
      mb: (theme) => theme.spacing(10),
    },
  },
  heading: {
    fontWeight: (theme) => theme.typography.fontWeightBold,
    pb: (theme) => theme.spacing(32),
    textAlign: "left",
  },
  Stack: {
    color: (theme) => theme.palette.default.darkGreen,
  },
  item: {
    backgroundColor: (theme) => theme.palette.default.white,
    padding: (theme) => theme.spacing(1),
    textAlign: "left",
    color: (theme) => theme.palette.default.darkGreen,
    flexGrow: 1,
    "& .MuiTypography-root": {
      lineHeight: 1,
    },
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    mt: (theme) => ({
      xs: theme.spacing(24),
      md: theme.spacing(32),
    }),
  },
};

export default styles;