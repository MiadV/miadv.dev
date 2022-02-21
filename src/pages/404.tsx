import React from 'react';
import Link from 'next/link';
import Container from '@/layouts/Container';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-5xl font-bold">404</h1>

        <h6 className="mb-2 text-center text-3xl font-bold text-gray-800 dark:text-gray-50">
          Oops! page not found.
        </h6>

        <p className="mb-4 text-center">
          {`Sorry, we couldn't find the page you're looking for.`}
        </p>
        <Link href="/" passHref>
          <Button as="a">Back to home</Button>
        </Link>
      </div>
    </Container>
  );
}
