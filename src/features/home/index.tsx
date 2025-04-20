import {Helmet} from '@dr.pogodin/react-helmet';

import {Container} from '@/components/container';
import {YouTubeIcon, InstagramIcon, TikTokIcon} from '@/components/icons';
import {SocialLink} from '@/components/social-link';
import {Photos} from '@/features/home/components/photos';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Indah Oei - Illustrator | Dreamlike & Whimsical Art</title>
        <meta
          name="description"
          content="Explore the enchanting illustrations of Indah Oei, a Jakarta-based artist creating whimsical and dreamlike artwork with oil pastels and digital tools."
        />
        <meta
          name="keywords"
          content="Indah Oei, illustrator, art, illustration, Jakarta artist, Surabaya artist, dreamlike art, whimsical art, oil pastels, digital art"
        />
        <meta name="author" content="Indah Oei" />
      </Helmet>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Illustrator Bringing Dreamlike Worlds to Life
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            In the vibrant artistic landscape of Indonesia, Indah Oei stands as
            an illustrator who masterfully translates the ethereal beauty of
            dreams into tangible visual narratives. With a signature style that
            blends whimsical characters and dreamlike settings, her art evokes a
            profound longing for the fantastical to become real. Indah's
            creative journey suggests a powerful belief: while the world of
            dreams may seem distant, the act of artistic creation serves as a
            potent bridge, a way to capture their essence and, in a sense, bring
            their magic into being, one colorful stroke at a time.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/indahoei"
              target="_blank"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              className="-m-1 p-1 h-6 w-6"
            />
            <SocialLink
              href="https://www.tiktok.com/@indah.oei"
              target="_blank"
              aria-label="Follow on TikTok"
              icon={TikTokIcon}
              className="-m-1 p-1 h-6 w-6"
            />
            <SocialLink
              href="https://youtube.com/@indahoei?si=TV1bca61FmFNhLQk"
              target='"_blank'
              aria-label="Follow on YouTube"
              icon={YouTubeIcon}
              className="-m-1 p-1 h-6 w-6"
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
};
