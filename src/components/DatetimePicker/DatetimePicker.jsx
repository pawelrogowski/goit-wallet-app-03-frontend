import 'react-datetime/css/react-datetime.css';

import { useField } from 'formik';
import moment from 'moment';
import { StyledDatetime } from './DatetimePicker.styled';
import PropTypes from 'prop-types';

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

DatetimePicker.propTypes = {
  name: PropTypes.string.isRequired,

  value: PropTypes.instanceOf(Date),

  dateFormat: PropTypes.string,
  timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  onChange: PropTypes.func,

  selected: PropTypes.instanceOf(Date),
  inputProps: PropTypes.object,
};
