'use client';
import {Box} from "@mui/material";
import {CustomImage, CustomList} from "@/utils/CustomElement";

const iconPartners = [
    {
        id: 1,
        logoUrl: '/image/logoOurPartners/image27.png',
        width: 130,
        height: 130,
    },
    {
        id: 2,
        logoUrl: '/image/logoOurPartners/image28.png',
        width: 173,
        height: 110,
    },
    {
        id: 3,
        logoUrl: '/image/logoOurPartners/image29.png',
        width: 162,
        height: 162,
    },
    {
        id: 4,
        logoUrl: '/image/logoOurPartners/image30.png',
        width: 162,
        height: 32,
    },
    {
        id: 5,
        logoUrl: '/image/logoOurPartners/image31.png',
        width: 94,
        height: 21,
    },
];

export const OurPartners = () => {
    return (
        <Box
            sx={{
                mt: '96px',
            }}
        >
            <CustomList
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {iconPartners.map(ele => {
                    const {id, logoUrl, width, height} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexBasis: 'calc((100% / 5) - 30px)',
                                borderRadius: '20px',
                                height: '110px',
                                overflow: 'hidden',
                                '&:hover': {
                                    boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',
                                },
                            }}
                        >
                            <CustomImage
                                src={logoUrl}
                                alt={''}
                                width={width}
                                height={height}
                                sx={{

                                }}
                            />
                        </Box>
                    )
                })}
            </CustomList>
        </Box>
    )
}