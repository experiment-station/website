import { PropsWithChildren } from 'react';
import { berkeleyMono } from './fonts';
import './styles.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${berkeleyMono.variable} dark`}>
      <head>
        <meta
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          name="viewport"
        />
        <meta content="rgb(10, 10, 10)" name="theme-color" />
        <meta content="rgb(10, 10, 10)" name="msapplication-TileColor" />
      </head>

      <body>
        <main className="p-safe">
          <section className="px-4 py-8 sm:px-0 max-w-3xl mx-auto">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
