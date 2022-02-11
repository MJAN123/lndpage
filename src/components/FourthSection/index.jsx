//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import {modal} from '../FirstSection/Form';

function FourthSection() {
    const screen1150 = useMediaQuery('(max-width:1150px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen410 = useMediaQuery('(max-width:410px)');
    const screen300 = useMediaQuery('(max-width:300px)');
    const screen250 = useMediaQuery('(max-width:250px)');


    return (
        <div className="fourthsection pb-36">  {/*pushing down*/}

            <div className="flex justify-center items-center flex-col w-[37%]" style={{ margin: "0 auto" }}>
                <Typography className={`${!screen250?(screen300?`!text-[2rem]`:`!text-4xl`):`!text-[1.8rem]`} text-center !font-bold !tracking-wide !mt-36 ${!screen410?(screen700?`w-[35rem]`:`w-[32rem]`):`w-[21.95rem]`} fontFam`}> Get Started today! </Typography>  {/*pushing down*/}
    
                <Typography className={`pl-7 pr-7 ${screen410?`text-sm`:`text-md`} text-center pt-7 ${!screen410?(screen700?`w-[35rem]`:`w-[32rem]`):`w-[21.95rem]`}`} variant="p">
                    Let’s talk about how our Start-up package can help you. Schedule a free 15-min initial consultation.
                </Typography>
    
                <Button onClick={() => modal() } className={`w-[18rem] ${screen980?`h-10`:``} !mt-5 !bg-[#004CFF] ${!screen860?(!screen1150?(screen980?`!text-[0.8725rem]`:`!text-[0.9725rem]`):`!text-[0.915rem]`):`!text-[0.75rem]`} !font-bold !rounded-[8px] !p-3 ${!screen1150?`!leading-[1.375rem]`:`!leading-[1.215rem]`}`} variant="contained">
                    BOOK FREE CONSULTATION
                </Button>    
            </div>
        </div>
    )
}

export default FourthSection;