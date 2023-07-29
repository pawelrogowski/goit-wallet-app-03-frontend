import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styled from 'styled-components';
import { useField } from 'formik';
import moment from 'moment';

const StyledDatetime = styled(Datetime)`
  input {
    border: none;
    border-bottom: 1px solid var(--color-switch-main);
    font-family: Circe;
    font-size: 18px;
    font-weight: 400;
    color: var(--font-color-dark);
    padding-left: 30px;

    &:focus-visible {
      outline: 0 !important;
    }
  }

  &.rdt {
    position: relative;
  }

  &.rdtPicker {
    position: absolute;
    min-width: 250px;
    padding: 4px;
  }

  .rdtPicker td.rdtToday:before {
    border-bottom: 7px solid var(--color-brand-primary);
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: var(--color-brand-primary);
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    input {
      padding-left: 20px;
    }
  }
`;

const DatetimePicker = ({ ...props }) => {
  const [field, , helpers] = useField(props);

  return (
    <StyledDatetime
      {...field}
      {...props}
      selected={field.value}
      onChange={value => {
        helpers.setValue(moment(value).format('DD.MM.YYYY'));
      }}
    />
  );
};

export default DatetimePicker;
