'use client';
import {Box, Container} from "@mui/material";
import {Header} from "@/app/component/Header";
import {SectionHeroBanner} from "@/app/component/homePage/SectionHeroBaner";
import {Footer} from "@/app/component/Footer";
import {createContext, useCallback, useLayoutEffect, useState} from "react";

export const PositionScrollContext = createContext(null);

export default function Template ({children}) {
    const [cursorInContainer, setCursorInContainer] = useState(false);

    const searchPointer = useCallback((event) => {
        const containerCarousel = document.querySelector('#containerCarouselOut').getBoundingClientRect();
        if (containerCarousel.top - event.clientY <= 0 && containerCarousel.bottom - event.clientY >= 0) {
            if (!cursorInContainer){
                setCursorInContainer(true);
            }
        } else {
            setCursorInContainer(false);
        }
    }, [cursorInContainer]);

    useLayoutEffect(() => {
        document.body.addEventListener('mousemove', searchPointer);
        return () => document.body.removeEventListener('mousemove', searchPointer);
    }, [searchPointer]);

    return (
        <Box>
            <Container
                maxWidth={'1440px'}
                sx={{
                    position: 'relative',
                    maxWidth: '1440px'
                }}
            >
                <SectionHeroBanner/>
                <Header/>
                <PositionScrollContext.Provider value={cursorInContainer}>
                    {children}
                </PositionScrollContext.Provider>
                <Footer/>
            </Container>

        </Box>
    )
}