import Home from './Home';
import { useContext } from 'react';
import { GlobalContext } from '../../Root';
import GlobalLoader from '../../components/GlobalLoader';

const HomeContainer = () => {
    const globalContext = useContext(GlobalContext);

    if (globalContext.globalLoading) {
        return (
            <GlobalLoader/>
        )
    }

    return (
        <Home/>
    )
};

export default HomeContainer;
