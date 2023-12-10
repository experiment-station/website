import type { Metadata } from 'next';
import { CgArrowTopRight } from 'react-icons/cg';
import Image from 'next/image';

const title = 'Experiment Station';
const description = `We're trying to build stuff, we'll see how it goes.`;
const email = 'experiment-station@proton.me';

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
};

const people = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/27828319?v=4',
    name: 'Okan',
    url: 'https://github.com/okanisildar',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/9790196?v=4',
    name: 'Altay',
    url: 'https://github.com/altaywtf',
  },
];

const projects = [
  {
    title: 'Beecast',
    description: 'Your hard-working AI podcast companion.',
    url: 'https://beecast.ai',
  },
  {
    title: 'Browsercare',
    description:
      'A tool for fine-tuning supported browser coverage of web projects.',
    url: 'https://browser.care',
  },
];

export default function Page() {
  return (
    <>
      <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-teal-800">
        <Image alt="Experiment Station's logo" fill src="/logo.png" />
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h1>{title}</h1>
        <p className="text-neutral-400">{description}</p>
      </div>

      <hr className="my-8" />

      <h2>People</h2>

      <div className="mt-4 flex flex-col gap-4">
        {people.map((item) => (
          <div key={item.url}>
            <div className="flex flex-row items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded border border-solid border-neutral-900">
                <Image
                  alt={item.name}
                  fill
                  sizes="100%"
                  src={item.avatar_url}
                />
              </div>

              <div className="flex flex-1 flex-col gap-0.5">
                <span>{item.name}</span>

                <a
                  className="flex flex-row items-center self-start text-teal-400 hover:text-teal-200"
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{item.url.split('https://')[1]}</span>

                  <span className="text-sm">
                    <CgArrowTopRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8" />

      <h2>Projects</h2>

      <div className="mt-4 flex flex-col gap-4">
        {projects.map((item) => (
          <div key={item.url} className="flex flex-1 flex-col gap-0.5">
            <a
              className="flex flex-row items-center text-base self-start text-teal-400 hover:text-teal-200 gap-0.5"
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{item.title}</span>

              <span className="text-sm">
                <CgArrowTopRight />
              </span>
            </a>

            <span className="text-neutral-400">{item.description}</span>
          </div>
        ))}
      </div>

      <hr className="my-8" />

      <a
        className="text-neutral-400 hover:text-neutral-200"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </>
  );
}
