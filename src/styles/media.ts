import { css } from 'styled-components';

const sizes = {
  mobile: 576,
  tablet: 768,
  desktop: 1024,
};

type SizeType = keyof typeof sizes;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label as SizeType] = (style: any) => css`
    @media (max-width: ${sizes[label as SizeType]}px) {
      ${style}
    }
  `;
  return acc;
}, {} as Record<SizeType, (style: any) => ReturnType<typeof css>>);
