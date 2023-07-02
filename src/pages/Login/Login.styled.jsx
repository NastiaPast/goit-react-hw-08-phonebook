import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 15px;
  color: #39293dba;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

export const LogTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #a031b8bb;
  font-size: 30px;
`;

export const LogLink = styled(Link)`
  color: rgba(138, 59, 202, 0.9);
  font-weight: 400;
  font-size: 20px;
`;
