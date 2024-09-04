'use client';
import {Box} from "@mui/material";
import {SectionAboutUs} from "@/app/component/homePage/sectionAboutUs/SectionAboutUs";
import {useCallback, useContext, useEffect, useState} from "react";
import {PositionScrollContext} from "@/app/template";
import {BigDot, CustomList} from "@/utils/CustomElement";

const sectionColors = [
    'rgba(243, 243, 159, 1)',
    'rgba(243, 173, 173, 1)',
    'rgba(124, 124, 187, 1)',
];

//sectionColors.fill('white');
// const initialState = Array(3).fill().map((_, index) => <SectionAboutUs  key={index}/>);
const initialState = [
    <SectionAboutUs key={1} color={sectionColors[0]}/>,
    <SectionAboutUs key={2} color={sectionColors[1]}/>,
    <SectionAboutUs key={3} color={sectionColors[2]}/>,
];
export const RenderCarousel = () => {
    const [whatIdSectionIsNow, setWhatIdSectionIsNow] = useState(0);
    const [holdOnSection, setHoldOnSection] = useState(false);
    const pointerIsContainer = useContext(PositionScrollContext);


    useEffect(() => {
        setHoldOnSection(pointerIsContainer);
    }, [pointerIsContainer]);

    useEffect(() => {
        let idInterval;
        if (!holdOnSection) {
            idInterval = setInterval(() => {
                setWhatIdSectionIsNow((whatIdSectionIsNow + 1) % initialState.length);
            }, 10000);
        }
        return () => clearInterval(idInterval);
    }, [whatIdSectionIsNow, holdOnSection]);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'end',
                width: '100%',
                overflow: 'hidden',
                // mt: '209px',
                height: '720px',

            }}
        >
            <CustomList
                id={'containerCarouselOut'}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    width: '300%',
                    height: '520px',
                    columnGap: '20px',
                }}
            >

                {initialState.map((ele, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                            sx={{
                                position: 'absolute',
                                top: '20px',
                                left: whatIdSectionIsNow === index ? 0 : '-100%',
                                transition: whatIdSectionIsNow !== index ? 'left 5000ms linear' : 'unset',
                                zIndex: whatIdSectionIsNow === index ? 0 : 1,
                                borderRadius: '20px',

                            }}
                        >
                            {ele}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '25px',
                                    mt: '82px',
                                    display: 'flex',
                                    columnGap: '30px',

                                }}
                            >
                                <BigDot
                                    onClick={() => setWhatIdSectionIsNow(0)}
                                    bgC={ whatIdSectionIsNow === 0 ? '#39425D' : '#E5E5E5'}
                                />
                                <BigDot
                                    onClick={() => setWhatIdSectionIsNow(1)}
                                    bgC={ whatIdSectionIsNow === 1 ? '#39425D' : '#E5E5E5'}
                                />
                                <BigDot
                                    onClick={() => setWhatIdSectionIsNow(2)}
                                    bgC={ whatIdSectionIsNow === 2 ? '#39425D' : '#E5E5E5'}
                                />
                            </Box>
                        </Box>
                    )
                })}
            </CustomList>
        </Box>
    )
}