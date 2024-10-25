import { useState } from 'react';
import styled from '@emotion/styled';
import { debounce } from 'lodash';
import { Post, SearchInput } from './components';
import { usePosts } from './hooks/posts';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;

  @media (min-width: 600px) {
    margin: 0 25%;
  }
`;

const App = () => {
  const [value, setValue] = useState<string>('');
  const { posts, deletePost } = usePosts(value);

  const onChange = debounce(async (input: string) => {
    setValue(input);
  }, 1000);

  function deleteHandler(id: number) {
    deletePost(id);
  }

  return (
    <Layout>
      <SearchInput onChange={onChange} />
      {posts.map((post) => {
        return <Post key={post.id} {...post} onDelete={deleteHandler} />;
      })}
    </Layout>
  );
};

export default App;
