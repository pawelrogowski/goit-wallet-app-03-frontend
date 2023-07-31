import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Switch from './../Switch/Switch';
import { Formik, Form, ErrorMessage } from 'formik';
import { object, string, date, bool, mixed, number } from 'yup';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { BaseInput } from 'components/Inputs/BaseInput';
import { useEffect, useState } from 'react';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import { options } from 'components/AddTransactionModal/data';
import DatetimePicker from 'components/DatetimePicker/DatetimePicker';
import { formatDate } from 'utils/formaters';
import { dateTransformer } from 'utils/formaters';
import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
import { addTransaction, fetchTransactions } from 'redux/slices/transactionSlice';
import Textarea from 'components/Inputs/Textarea';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  left: 0;
  background-color: var(--background-overlay-modal);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
  z-index: 1000;

  .category {
    top: 44px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Modal = styled.div`
  min-width: 540px;
  padding: 40px 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border-radius: 12px;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: 20px;
    min-width: 300px;
  }
`;

const Heading = styled.h3`
  color: var(--font-color-dark);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    stroke: var(--font-color-dark);
    width: 20px;
    height: 20px;
    position: relative;
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    & svg {
      display: none;
    }
  }
`;

const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`;

const CancelButton = styled(SecondaryButton)`
  margin-bottom: 0;
  margin-top: -40px;
`;

const TwoColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
  max-width: 410px;

  input {
    width: 181px;
  }

  & > :first-child input {
    font-family: Circe;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3px;
    outline: none;

    @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
      text-align: left;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  ${BaseInput} {
    @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
      padding-left: 20px;
      text-align: left;
    }
  }
`;

const CalendarWrapper = styled.div`
  position: relative;
  margin-top: 2px;

  svg {
    position: absolute;
    bottom: 6px;
    right: 0;
    width: 24px;
    height: 24px;
    fill: var(--color-brand-primary);
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    svg {
      right: 20px;
      bottom: 2px;
    }
  }
`;

const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: 28px;
  left: 0px;
  font-size: 13px;
  color: var(--color-brand-accent);
`;

const AddTransactionModal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };

  const handleCloseModal = () => {
    dispatch(setIsModalAddTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };
  const escKeyDown = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    return () => {
      document.removeEventListener('keydown', escKeyDown);
    };
  });

  const handleSubmit = values => {
    dispatch(
      addTransaction({
        amount: values.value,
        comment: values.comment,
        date: values.date,
        category: isChecked ? 'income' : values.category.label,
        isIncome: isChecked,
      })
    ).then(() => dispatch(fetchTransactions()));
    dispatch(setIsModalAddTransactionOpen(false));
    document.body.style.overflow = 'unset';
  };

  return (
    <Backdrop onClose={handleCloseModal} onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={handleCloseModal}>
          <Icon icon="icon__close" />
        </CloseButton>
        <Formik
          initialValues={{
            type: isChecked,
            category: null,
            value: '',
            date: `${formatDate(new Date())}`,
            comment: '',
          }}
          validationSchema={object({
            type: bool(),
            category: mixed().when('type', {
              is: type => !type,
              then: () => mixed().required('Please choose transaction category.'),
              otherwise: () => mixed().notRequired(),
            }),
            value: number()
              .typeError('Transaction value must be a number')
              .required('Please provide transaction value.'),
            date: date()
              .transform(dateTransformer)
              .typeError('Please enter a valid date')
              .required('Please provide transaction date.'),
            comment: string().notRequired(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            resetForm();
            setSubmitting(false);
          }}
          enableReinitialize
        >
          {({ values, setFieldValue, handleBlur }) => (
            <FormikForm>
              <Heading>Add transaction</Heading>
              <Switch
                name="type"
                checked={isChecked}
                onClick={handleCheckboxChange}
                type="checkbox"
              />
              {!isChecked && (
                <InputWrapper>
                  <CategorySelect
                    name="category"
                    placeholder="Select a category"
                    value={values.category}
                    onChange={category => setFieldValue('category', category)}
                    options={options}
                  />
                  <ErrorText name="category" component="div" className="category" />
                </InputWrapper>
              )}
              <TwoColumnRow>
                <InputWrapper>
                  <BaseInput
                    placeholder="0.00"
                    title="Please put the transaction value"
                    name="amount"
                    type="text"
                    autoComplete="off"
                    value={values.value}
                    onChange={value => setFieldValue('value', value.target.value)}
                    onBlur={handleBlur}
                    onKeyUp={handleBlur}
                  />
                  <ErrorText name="value" component="div" className="error" />
                </InputWrapper>
                <CalendarWrapper>
                  <DatetimePicker
                    dateFormat="DD.MM.YYYY"
                    name="date"
                    type="date"
                    timeFormat={false}
                  />
                  <ErrorText name="date" component="div" />
                  <Icon icon="icon__baseline-date_range" />
                </CalendarWrapper>
              </TwoColumnRow>
              <InputWrapper>
                <Textarea
                  placeholder="Comment"
                  title="Please describe your transaction."
                  name="comment"
                  type="text"
                  autoComplete="off"
                />
                <ErrorText name="comment" component="div" />
              </InputWrapper>
              <PrimaryButton type="submit">ADD</PrimaryButton>
              <CancelButton type="button" onClick={handleCloseModal}>
                CANCEL
              </CancelButton>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default AddTransactionModal;
