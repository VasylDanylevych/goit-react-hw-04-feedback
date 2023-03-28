import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { List } from './Statistics.style';

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            {total() === 0 
                ? <Notification message="There is no feedback"/>
                : <List>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total()}</li>
                    <li>Positive feedback: {positivePercentage()}%</li>
                 </List>
            }
            
        </>
    )
}


Statistics.propTypes = {
    props: PropTypes.object,
  };
