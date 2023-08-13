import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TransactionsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 395px;
  width: 100%;
  min-width: 240px;
`;

export const TransactionsElement = styled.li``;

export const TransactionList = styled.ul`
  background-color: var(--font-color-light);
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: ${props =>
      props.type ? 'var(--color-brand-secondary)' : 'var(--color-brand-accent)'};
  }
`;

export const TransactionElement = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  gap: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-transactions);
  }
`;

export const TransactionHeader = styled.h3`
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const TransactionText = styled.p`
  color: var(--font-color-dark);
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  cursor: pointer;
  vertical-align: middle;
  padding: 0;
  transition: color 150ms;

  & svg {
    fill: none;
    stroke: var(--font-color-dark);
    width: 14px;
    height: 14px;
    transition: stroke 150ms;
  }

  &:hover {
    color: var(--color-brand-primary);

    svg {
      stroke: var(--color-brand-primary);
    }
  }
`;
