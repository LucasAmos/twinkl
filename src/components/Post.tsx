import styled from '@emotion/styled';
import { Post } from '../types';

const Container = styled.div({
  backgroundColor: '#f7f7f7',
  marginBottom: 10,
  padding: 5,
});

const Title = styled.div({
  fontWeight: 'bold',
  marginBottom: 2,
});

const HeaderBar = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const DeleteIcon = styled.div({
  color: 'red',
  cursor: 'pointer',
});

type PostProps = Post & {
  readonly onDelete: (id: number) => void;
};

export default function PostComponent({ body, id, onDelete, title }: PostProps) {
  return (
    <Container>
      <HeaderBar>
        <Title>{title}</Title> <DeleteIcon onClick={() => onDelete(id)}>X</DeleteIcon>
      </HeaderBar>
      {body}
    </Container>
  );
}
