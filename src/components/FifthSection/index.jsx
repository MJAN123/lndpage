//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { logo, arrowbutton, linkedin, instagram,facebook, twitter } from '../../images';


function FifthSection() {
    const screen1150 = useMediaQuery('(max-width:1150px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    const screen760 = useMediaQuery('(max-width:760px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen600 = useMediaQuery('(max-width:600px)');
    const screen500 = useMediaQuery('(max-width:500px)');
    const screen400 = useMediaQuery('(max-width:500px)');
    const screen380 = useMediaQuery('(max-width:380px)');
    const screen360 = useMediaQuery('(max-width:360px)');
    const screen240 = useMediaQuery('(max-width:240px)');


    return (
        <div className={`fifthsection ${screen700?`h-[22rem]`:``} flex justify-end pr-20 mt-[-3.5rem] pb-20`}>  {/*pushing down*/}

            <div className={`mt-36 ${screen700?`w-full`:`w-[80%]`} ${screen700?`ml-20`:``} ${screen700?`mt-[3.5rem]`:``}`}>
                <di className="flex items-center ml-1 pb-7">
                    <div style={{ flex: "0.97" }}>
                        <button className={`w-[15.3rem] h-[2.3rem] ${screen700?`ml-[-1.5rem]`:`ml-[-0.5rem]`}`}>
                            <img src={logo} alt=""  className={`cursor-pointer ${screen700?`w-[11.5rem] h-[2em]`:`w-[13.7rem] h-[2.4rem]`} ${screen700?`mt-10`:``}`} style={{ margin: "0 auto" }}/>
                        </button>
                    </div>

                    <div className="flex items-center">
                        <a href="#top" className={`w-full h-[2.3rem] ml-5 flex items-center ${screen240&&`ml-[-0.5rem]`}`}>
                            <p className={`text-gray-300 tracking-wide pr-3 font-bold ${screen380&&`invisible`} ${screen400?`mt-3.5`:`mt-2.5`}`} style={{ wordSpacing: "0.1rem", fontSize: screen400?"0.6rem":"0.8rem" }}> BACK TO TOP </p>
                            <img src={arrowbutton} alt="" className="w-[2.3rem]" style={{ margin: "0 auto" }}/>
                        </a>
                    </div>
                </di>

                <div className={`flex items-center ${!screen500?`justify-between`:`justify-around`} ${!screen500?(!screen600?(!screen700?(!screen760?(!screen860?(!screen980?(!screen1150?`w-[21%]`:`w-[24.5%]`):`w-[26.5%]`):`w-[29.25%]`):`w-[32.05%]`):`w-[34.75%]`):`w-[38.85%]`):`w-[100%]`} ml-3`}
                     style={{ margin: screen700?"0 auto":"" }}
                >
                    <a href="https://linkedin.com" target="_blank">
                        <button className={`bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl ${screen360?`ml-2`:``}`}>
                            <img src={linkedin} alt="" style={{ margin: "0 auto" }} className="w-[0.9rem] h-[1rem]"/>
                        </button>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <button className={`bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl ${screen360?`ml-2`:``}`}>
                            <img src={instagram} alt="" style={{ margin: "0 auto" }} className="w-[1.05rem] h-[1.1rem]"/>
                        </button>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <button className={`bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl ${screen360?`ml-2`:``}`}>
                            <img src={facebook} alt="" style={{ margin: "0 auto" }} className="w-[0.6rem] h-[0.9rem]"/>
                        </button>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                       <button className={`bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl ${screen360?`ml-2`:``}`}>
                           <img src={twitter} alt="" style={{ margin: "0 auto" }} className="w-[1.15rem] h-[1rem]"/>
                       </button>
                    </a>
                </div>

                <div className={`flex ${screen700?`items-start`:`items-center`} ml-3 mt-10 ${screen700?`flex-col-reverse`:`flex-row`}`}>
                    <Typography className={`${screen700?`pt-3`:``} ${screen400&&`w-[20rem]`} text-gray-400 !font-semibold !tracking-wide w-[60%]`} variant="body2"> © Copyright 2022 the digital BA </Typography>

                    <div className={`flex justify-around ${screen700?`items-start`:`items-center`} ${screen700?`flex-col`:`flex-row`} w-[40%]`}>
                        <a href="" className={`text-gray-400 ${screen380&&`w-[20rem]`}`}> Privacy Policy </a>
                        <a href="" className={`text-gray-400 ${screen380&&`w-[20rem]`}`}> Terms & Conditions </a>
                        <a href="" className={`text-gray-400 ${screen380&&`w-[20rem]`}`}> Legal </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;