import { useField } from 'formik';
import { StyledTextarea } from './Textarea.styled';

const Textarea = ({ ...props }) => {
  const [field] = useField(props);
  return <StyledTextarea {...field} {...props} />;
};

export default Textarea;
