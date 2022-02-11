//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { curvered2, comma } from '../../images';
//REACT-CAROURSEL
import Carousel from 'react-elastic-carousel';


function ThirdSection() {
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen600 = useMediaQuery('(max-width:600px)');


    return (
        <div className="thirdsection">

            <div className={`${!screen600?`w-[70%]`:`w-[88%]`} pb-28 flex justify-center flex-col`} style={{ margin: "0 auto" }}>
                <div className="flex items-center mt-48 w-[60%]">  {/*pushing down mt-48*/}
                    <img src={curvered2} className="w-[3.4rem] h-[3.4rem]" alt=""/>
                    <div className="flex items-center ml-[-2.5rem]">
                        <img src={comma} className="w-[1.1rem] h-[2.2rem]" alt=""/>
                        <img src={comma} className="w-[1.1rem] h-[2.2rem]" alt=""/>
                    </div>
                </div>

                <Carousel itemsToShow={1} showArrows={false} className="ml-[-0.55rem] !w-[105%]">
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p className={`${screen700?`text-xl`:``}`}> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p className={`${screen700?`text-xl`:``}`}> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p className={`${screen700?`text-xl`:``}`}> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p className={`${screen700?`text-xl`:``}`}> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p className={`${screen700?`text-xl`:``}`}> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                </Carousel>
            </div>

        </div>
    )
}

export default ThirdSection;