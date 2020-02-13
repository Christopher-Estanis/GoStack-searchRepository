import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .git {
    margin-right: 10px;
  }

  .button {
    text-decoration: none;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .voltar {
    font-weight: bold;
    font-size: 16px;
    border-radius: 20px;
    &:hover {
      background: #bb4234;
    }
  }
`;

export default Container;
