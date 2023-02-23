import { AppContextProvider } from '../../src/core/context/store'
import Lessons from '../../src/pages/Dashboard/admin/Lessons'

const two = () => {
    return (
        <AppContextProvider>
            <Lessons />
        </AppContextProvider>
    )
}

export default two