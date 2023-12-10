import localFont from 'next/font/local';

export const berkeleyMono = localFont({
  src: [
    {
      path: './berkeley-mono/BerkeleyMonoVariable-Regular.woff2',
      style: 'normal',
    },
    {
      path: './berkeley-mono/BerkeleyMonoVariable-Italic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-berkeley-mono',
});
