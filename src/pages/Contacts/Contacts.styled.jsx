import styled from 'styled-components';

export const ContItem = styled.li`
  background-color: #f9fbfb;
  padding-left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const ContList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const ContWrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 220px;
  gap: 10px;
`;

export const ContTitle = styled.h2`
  text-align: center;
  margin: 20px auto;
  color: #6b2877bb;
  font-size: 24px;
`;

export const Container = styled.div`
  padding: 20px 0;
`;

export const DialogWrap = styled.div`
  padding: 50px;
`;

export const DialogTitle = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: rgba(138, 59, 202, 0.9);
  font-size: 24px;
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
