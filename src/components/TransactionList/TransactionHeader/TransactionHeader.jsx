import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
export const ListFlexbox = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin: 0;
  padding: 0;
  gap: 20px;
  list-style: none;
  height: 58px;
  border-radius: 30px;
  width: 100%;
  background-color: #fff;
  justify-content: fle-start;
  align-items: center;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  color: #000;
  padding-left: 20px;
  overflow: hidden;
  li {
    flex: 1;
    overflow: hidden;
  }
  li:nth-child(1) {
    min-width: 80px;
    max-width: 80px;
  }
  li:nth-child(2) {
    min-width: 40px;
    max-width: 40px;
    text-align: center;
  }
  li:nth-child(3) {
    flex-grow: 2;
    max-width: 180px;
    min-width: 180px;
  }
  li:nth-child(4) {
    flex-grow: 3;
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  li:nth-child(5) {
    max-width: 80px;
    min-width: 80px;
    margin-left: auto;
  }
  li:nth-child(6) {
    margin-left: auto;
    min-width: 110px;
    max-width: 110px;
  }
`;

export const TransactionHeader = () => {
  return (
    <ListFlexbox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
    >
      <li>Date</li>
      <li>Type</li>
      <li>Category</li>
      <li>Comment</li>
      <li>Sum</li>
      <li></li>
    </ListFlexbox>
  );
};
