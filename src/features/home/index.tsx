import {Helmet} from '@dr.pogodin/react-helmet';

import {Container} from '@/components/container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/social-icons';
import {Photos} from '@/features/home/components/photos';
import {SocialLink} from '@/features/home/components/social-link';

export const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <Helmet>
          <title>
            Spencer Sharp - Software Designer, Founder, Amateur Astronaut
          </title>
          <meta
            name="description"
            content="Meet Spencer Sharp, a software designer and entrepreneur in New York City, founder of Planetaria, empowering space exploration for everyone."
          />
        </Helmet>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink to="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              to="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              to="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              to="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
};
