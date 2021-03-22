import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popup from "../Popup/Popup";
import Button from "../../ui/Button";
import FieldSet from "../../ui/Fieldset";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import Radio from "../../ui/Radio";
import {v4} from "uuid";
import AltButton from "../../ui/AltButton";
import {media} from "../../utils/vars";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {getAccountedArray, calculateTaxDeduction} from '../../utils/utils';

const content = {
  title: `Налоговый вычет`,
  intro: `Используйте налоговый вычет, чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.`,
};

const purposeContent = [
  {
    id: v4(),
    value: "payment",
    label: "Платеж",
    isDisabled: false,
  },
  {
    id: v4(),
    value: "term",
    label: "Срок",
    isDisabled: true,
  },
];

const StyledForm = styled.form`
  ${media.mobile} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const StyledAltButton = styled(AltButton)`
  margin-bottom: 15px;
`;

const StyledFieldSet = styled(FieldSet)`
  display: flex;
  align-items: center;
  margin-bottom: 38px;
  margin-top: 23px;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;

  ${media.mobile} {
    margin-top: auto;
  }
`;

const StyledRadioBlock = styled.div`
  margin-left: 33px;
  display: flex;

  ${media.mobile} {
    margin-left: 0;
    margin-top: 17px;
  }
`;

const StyledCheckboxBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 170px;
  margin-top: -7px;
`;

const TaxDeductionPopup = ({closeModal, onSubmit}) => {
  const {title, intro} = content;

  const [payment, setPayment] = useState(null);
  const [deductionInfo, setDeductionInfo] = useState(null);
  const [activePurpose, setPurpose] = useState("payment");
  const [isError, setError] = useState(false);

  const paymentRef = useRef(null);

  const handleCountButtonClick = () => {
    if (paymentRef.current.value) {
      setPayment(paymentRef.current.value);
      setDeductionInfo(
        getAccountedArray(calculateTaxDeduction(paymentRef.current.value))
      );
    } else {
      setError(true);
    }
  };

  const handleDeductionCheckboxChange = (id, checked) => {
    const currentElementIndex = deductionInfo.findIndex(item => item.id === id);
    if (checked) {
      setDeductionInfo([
        ...deductionInfo.slice(0, currentElementIndex),
        {...deductionInfo[currentElementIndex], isCheck: true},
        ...deductionInfo.slice(currentElementIndex + 1),
      ]);
    } else {
      setDeductionInfo([
        ...deductionInfo.slice(0, currentElementIndex),
        {...deductionInfo[currentElementIndex], isCheck: false},
        ...deductionInfo.slice(currentElementIndex + 1),
      ]);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    if (deductionInfo && activePurpose === "payment") {
      onSubmit(
        deductionInfo && deductionInfo.filter(item => item.isCheck === true)
      );
      closeModal();
    }
  };

  return (
    <Popup title={title} intro={intro} closeModal={closeModal}>
      <StyledForm onSubmit={handleFormSubmit}>
        <FieldSet title='Ваша зарплата в месяц'>
          <Input
            placeholder='Введите данные'
            paymentRef={paymentRef}
            isError={isError}
            onValueChange={() => setError(false)}
          
          />
        </FieldSet>
        <StyledAltButton onCountButtonClick={handleCountButtonClick}>
          Рассчитать
        </StyledAltButton>
        {payment && deductionInfo && (
          <FieldSet title='Итого можете внести в качестве досрочных:'>
            <StyledCheckboxBlock>
              {deductionInfo.map(({amount, year, isCheck, id}) => (
                <Checkbox
                  name={year}
                  key={id}
                  value={amount}
                  year={year}
                  id={id}
                  checked={isCheck}
                  onCheckboxChange={handleDeductionCheckboxChange}
                />
              ))}
            </StyledCheckboxBlock>
          </FieldSet>
        )}
        <StyledFieldSet title='Что уменьшаем?'>
          <StyledRadioBlock>
            {purposeContent.map(({id, value, label, isDisabled}) => (
              <Radio
                name='purpose'
                key={id}
                value={value}
                label={label}
                checked={value === activePurpose}
                onRadioChange={() => setPurpose(value)}
              />
            ))}
          </StyledRadioBlock>
        </StyledFieldSet>
        <StyledButton>Добавить</StyledButton>
      </StyledForm>
    </Popup>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit(deductionInfo) {
    dispatch(ActionCreator.addEarlyPayment(deductionInfo));
  },
});

TaxDeductionPopup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(TaxDeductionPopup);
