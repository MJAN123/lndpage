//COMPONENTS
import { FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection } from './components';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
    const screen1000 = useMediaQuery('(max-width:1000px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');

    
    return (
        <div className="root">
            <FirstSection
            />

            <div className={`pb-36 ${!screen700?(screen1000?`ml-[-7rem]`:``):`ml-[2.55rem]`}`}>
                <SecondSection
                />
            </div>

            <ThirdSection
            />

            <FourthSection
            />

            <FifthSection
            />
        </div>
    )
}

export default App;