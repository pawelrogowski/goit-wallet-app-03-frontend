import 'react-datetime/css/react-datetime.css';

import { useField } from 'formik';
import moment from 'moment';
import { StyledDatetime } from './DatetimePicker.styled';

const DatetimePicker = ({ ...props }) => {
  const [field, , helpers] = useField(props);

  return (
    <StyledDatetime
      {...field}
      {...props}
      inputProps={{
        readOnly: true,
      }}
      selected={field.value}
      onChange={value => {
        helpers.setValue(moment(value).format('DD.MM.YYYY'));
      }}
    />
  );
};

export default DatetimePicker;
