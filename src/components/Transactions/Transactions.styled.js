import styled from 'styled-components';
import { PrimaryButton } from 'components/Buttons/Buttons';

export const TransactionContainer = styled.div`
  height: calc(100% - 32px);
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    margin-top: 57px;
    background: transparent;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-logout-button);
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-logout-button);
  }

  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;

  &:hover {
    -webkit-mask-position: left top;
    mask-position: left top;
  }
`;

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  width: 100%;
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

export const TransactionsTableHead = styled.thead`
  font-size: 18px;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 1000;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 58px;
    height: 58px;
  }

  &:before {
    top: 0;
    left: 0;
    background-color: #f1f2f7;
  }

  &:after {
    top: 0;
    right: 0;
    background: #fee8e3;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      background: linear-gradient(180deg, rgba(255, 232, 227, 1) 0%, rgba(251, 235, 233, 1) 100%);
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      background: #fee8e3;
    }

    @media (min-width: ${props => props.theme.breakpoints.extraLarge}) {
      background-color: #f1f2f7;
    }
  }

  & th {
    position: relative;
    z-index: 2;
  }
`;

export const TransactionsTableHeadRow = styled.tr`
  vertical-align: middle;
  overflow: hidden;
`;

export const TransactionsTableHeader = styled.th`
  padding: 20px 0px 20px 20px;
  text-align: left;
  background-color: var(--background-light);

  &:first-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  &:last-child {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  &:nth-child(5) {
    text-align: right;
  }
`;

export const TransactionsTableBody = styled.tbody``;

export const TransactionTableData = styled.td`
  padding: 12.5px 0px 12.5px 20px;
  border: none;
  border-bottom: solid 1px var(--background-gray);
  box-shadow: 0px 1px 0px var(--background-light);
  vertical-align: middle;

  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(4) {
    max-width: 300px;
    min-width: 100px;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
  }

  &:nth-child(5) {
    text-align: right;
    font-weight: 700;
    white-space: nowrap;
  }

  &:last-child {
    text-align: center;
    min-width: 140px;
  }
`;

export const EditButton = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 8px;
  border: 1px solid transparent;
  border-radius: 100%;
  transition: border 150ms;

  & svg {
    fill: none;
    stroke: var(--font-color-dark);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    z-index: 10;
    transition: stroke 150ms;
  }

  &:hover {
    border: 1px solid var(--color-brand-primary);

    svg {
      stroke: var(--color-brand-primary);
    }
  }
`;

export const SmallButton = styled(PrimaryButton)`
  display: inline-block;
  width: 67px;
  height: 26px;
  color: var(--background-light);
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0;
`;

export const TransactionsBodyHeadRow = styled.tr`
  &:hover {
    background-color: var(--background-transactions-el);
  }
`;
