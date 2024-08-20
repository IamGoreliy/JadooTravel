'use client';
import {Box} from "@mui/material";
import {CustomImage} from "@/utils/CustomElement";

export const SectionHeroBanner = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <CustomImage
                    src={'/image/titleImg/Traveller 1.png'}
                    alt={''}
                    width={765}
                    height={764}
                    sx={{
                        position: 'absolute',
                        top: '105px',
                        right: '110px',
                        zIndex: 0
                    }}
                />
                <CustomImage
                    src={'/image/titleImg/Decore.png'}
                    alt={''}
                    width={765}
                    height={764}
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        zIndex: -2
                    }}
                />
                <CustomImage
                    src={'/image/titleImg/plane.png'}
                    alt={''}
                    width={167}
                    height={154}
                    sx={{
                        position: 'absolute',
                        top: '161px',
                        right: '637px',
                        zIndex: -1
                    }}
                />
                <CustomImage
                    src={'/image/titleImg/plane.png'}
                    alt={''}
                    width={167}
                    height={154}
                    sx={{
                        position: 'absolute',
                        top: '208px',
                        right: '91px',
                        zIndex: -1
                    }}
                />
            </Box>
        </Box>
    )
}