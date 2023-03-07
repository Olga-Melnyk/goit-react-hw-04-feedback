import PropTypes from 'prop-types';
import { OptionsList, OptionsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {/* <OptionsTitle>Statistics</OptionsTitle> */}
      <OptionsList>
        <OptionsItem>Good: {good}</OptionsItem>
        <OptionsItem>Neutral: {neutral}</OptionsItem>
        <OptionsItem>Bad: {bad}</OptionsItem>
        <OptionsItem>Total: {total}</OptionsItem>
        <OptionsItem>Positive feedback: {positivePercentage}%</OptionsItem>
      </OptionsList>
    </div>
  );
};

Statistics.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
