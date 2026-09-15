import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

import { home } from 'virtual:content';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hello App</title>
        <meta name="description" content="A simple, clean hello world page." />
        <link rel="canonical" href="https://helloapp.com/" />
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h1
            className="font-heading text-foreground leading-none tracking-tight"
            style={{ fontSize: 'clamp(5rem, 20vw, 18rem)' }}
          >
            {home.greeting}
          </h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
            className="mx-auto mt-4 mb-6 h-1 w-16 rounded-full origin-left"
            style={{ background: 'hsl(var(--accent))' }}
          />

          <p className="text-muted-foreground text-lg md:text-xl font-sans tracking-wide">
            {home.tagline}
          </p>
        </motion.div>
      </main>
    </>
  );
}
