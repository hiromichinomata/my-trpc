import { trpc } from '../utils/trpc';

const Test = () => {
  const test = trpc.helloName.useQuery({ name: 'John' });

  return <div>{test.data}</div>;
};

export default Test;
