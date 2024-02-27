import { useRouteError } from 'react-router-dom';
import Layout from './layout';

export default function Error() {
  const error = useRouteError() as Error;
  return (
    <Layout>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    </Layout>
  );
}
