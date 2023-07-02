import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 10%;
  display: flex;
  padding-left: 20%;
`;

export const RegLink = styled(Link)`
  font-size: 18px;
  margin: 0 4px;
  color: rgba(138, 59, 202, 0.9);
  font-weight: 500;
`;

export const RegText = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 1.11;
  color: #39293dba;
  font-weight: 500;
  text-align: center;
`;

export const RegTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #a031b8bb;
  font-size: 30px;
`;
