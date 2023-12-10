import localFont from 'next/font/local';

export const berkeleyMono = localFont({
  src: [
    {
      path: './berkeley-mono-variable-regular.woff2',
      style: 'normal',
    },
    {
      path: './berkeley-mono-variable-italic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-berkeley-mono',
});
