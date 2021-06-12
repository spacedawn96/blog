export const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
export const customHeigtMediaQuery = (maxHeigt: number) =>
  `@media (max-height: ${maxHeigt}px)`;

export const breakpoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '375px',
};

export const custompoints = {
  xlarge: '1000px',
  large: '1024px',
  medium: '768px',
  small: '375px',
};

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(375),
};

const heightMedia = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(375),
};

export default media;
