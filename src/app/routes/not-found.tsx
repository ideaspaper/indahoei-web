import {useNavigate} from 'react-router';

import {Button} from '@/components/button';
import {Container} from '@/components/container';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Sorry, we couldn’t find the page you’re looking for.
          </h1>
          <Button
            onClick={() => navigate(-1)}
            className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
