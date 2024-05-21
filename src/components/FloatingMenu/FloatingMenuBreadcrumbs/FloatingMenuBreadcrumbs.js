import PropTypes from 'prop-types';
import { Breadcrumbs } from '@mantine/core';

const FloatingMenuBreadcrumbs = ({
    breadcrumbs
}) => {
    return (
        <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    )
};

FloatingMenuBreadcrumbs.propTypes = {
    breadcrumbs: PropTypes.array.isRequired
};

export default FloatingMenuBreadcrumbs
