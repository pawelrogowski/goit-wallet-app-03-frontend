import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Switch from './../Switch/Switch';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Formik, Form } from 'formik';
import { object, string, date, bool } from 'yup';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { BaseInput } from 'components/Inputs/BaseInput';
import Loader from './../Loader/Loader';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-overlay-modal);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
  padding: 15px;
  z-index: 1000;
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
`;

const Heading = styled.h3`
  color: var(--font-color-dark);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  align-items: center;
  gap: 47px;

  input {
    width: 181px;
  }

  & > :first-child {
    font-family: Circe;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-bottom: 3px;
  }
`;

const CalendarWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -3px;
    right: 0;
    width: 24px;
    height: 24px;
    fill: var(--color-brand-primary);
  }
`;

const StyledDatetime = styled(Datetime)`
  input {
    border: none;
    border-bottom: 1px solid var(--color-switch-main);
    font-family: Circe;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: var(--font-color-dark);
    padding-left: 30px;
  }

  &.rdt {
    position: relative;
  }
  &.rdtPicker {
    position: absolute;
    min-width: 250px;
    padding: 4px;
    margin-top: 1px;
  }

  .rdtPicker td.rdtToday:before {
    border-bottom: 7px solid var(--color-brand-primary);
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: var(--color-brand-primary);
  }
`;

const TransactionModal = () => {
  return (
    <Backdrop>
      <Modal>
        <Formik
          initialValues={{ value: '', date: '', comment: '' }}
          validationSchema={object({
            switch: bool(),
            value: string().required('Please provide transaction value.'),
            date: date().required('Please provide transaction date.'),
            comment: string().required('Please provide provide transaction description.'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isValid, isSubmitting, errors }) => (
            <FormikForm>
              <Heading>Add transaction</Heading>
              {isSubmitting && <Loader />}
              <Switch name="switch" />
              <TwoColumnRow>
                <BaseInput
                  placeholder="0.00"
                  title="Please put the transaction value"
                  name="value"
                  type="text"
                  autoComplete="off"
                />
                {errors.value && <p>{errors.value}</p>}
                <CalendarWrapper>
                  <StyledDatetime
                    dateFormat="DD.MM.YYYY"
                    name="date"
                    type="date"
                    timeFormat={false}
                    initialValue={new Date().toLocaleDateString('pl-PL', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  />
                  {errors.date && <p>{errors.date}</p>}
                  <Icon icon="icon__baseline-date_range" />
                </CalendarWrapper>
              </TwoColumnRow>
              <BaseInput
                placeholder="Comment"
                title="Please describe your transaction."
                name="comment"
                type="text"
                autoComplete="off"
              />
              {errors.comment && <p>{errors.comment}</p>}
              <PrimaryButton type="submit" disabled={!isValid}>
                ADD
              </PrimaryButton>
              {/* <PrimaryButton type="submit" disabled={!isValid}>
              Add
            </PrimaryButton> */}
              <CancelButton type="button">CANCEL</CancelButton>
              <CloseButton>
                <Icon icon="icon__close" />
              </CloseButton>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};

export default TransactionModal;
