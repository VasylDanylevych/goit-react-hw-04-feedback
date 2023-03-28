import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.style';

export const FeedbackOptions  = ({ options, onLeaveFeedback }) => {
    return (
        <Container> 
            {options.map(option => { 
                return <Button key={option} onClick={onLeaveFeedback} option={option}>{option.toUpperCase()}</Button>
            })}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };
