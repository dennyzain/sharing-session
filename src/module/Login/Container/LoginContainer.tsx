import { useQuery } from 'react-query';
import { TestingApi } from 'service/testing.api';
import LoginComponent from '../Component/LoginComponent';

export default function LoginContainer() {
  const { isFetching, isLoading, data } = useQuery('getPost', TestingApi);
  console.log(isFetching, 'data sedang fetching');
  return <LoginComponent />;
}
