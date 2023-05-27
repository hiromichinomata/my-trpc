import { trpc } from '../utils/trpc';

const Test = () => {
  const hello = trpc.hello.useQuery();
  return <div>{hello.data}</div>;
};

export default Test;
