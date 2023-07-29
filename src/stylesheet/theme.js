export const theme = {
  fonts: {
    poppins: 'Poppins, sans-serif',
    circe: 'Circe, sans-serif',
  },

  colors: {
    brandPrimary: 'var(--color-brand-primary)',
    brandSecondary: 'var(--color-brand-secondary)',
    brandAccent: 'var(--color-brand-accent)',
    logoutButton: 'var(--color-logout-button)',
  },

  background: {
    light: 'var(--background-light)',
    accent: 'var(--background-accent)',
    primary: 'var(--background-primary)',
    secondary: 'var(--background-secondary)',
  },

  //added max media breakpoints for when you want to use breakpoints with max-width instead of min-width in media queries, they only differ by one pixel

  breakpoints: {
    mobile: '320px',
    mobileForMaxMedia: '319px',
    tablet: '768px',
    tabletForMaxMedia: '767px',
    desktop: '1280px',
    desktopForMaxMedia: '1279px',
    extraLarge: '2100px',
  },
};
