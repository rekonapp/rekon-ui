import PropTypes from 'prop-types';
import FloatingActions from './FloatingActions';

const FloatingActionsContainer = ({
    scrollIntoView
}) => {
	return (
		<FloatingActions onScrollClick={scrollIntoView}/>
	);
};

FloatingActionsContainer.propTypes = {
    scrollIntoView: PropTypes.func.isRequired
}

export default FloatingActionsContainer;
