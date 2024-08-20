'use client';
import {Box, Typography} from "@mui/material";
import {CustomImage, CustomList} from "@/utils/CustomElement";
import {IconDecorTopSale, IconNav} from "@/utils/createSVG";

const topSaleTure = [
    {
        id: 1,
        country: 'Rome, Italty',
        cost: '5,42',
        dayTrip: '10 Days Trip',
        imgUrl: '/image/sectionTopSelling/1.png',
    },
    {
        id: 2,
        country: 'London, UK',
        cost: '4.2',
        dayTrip: '12 Days Trip',
        imgUrl: '/image/sectionTopSelling/2.png',
    },
    {
        id: 3,
        country: 'Full Europe',
        cost: '15',
        dayTrip: '28 Days Trip',
        imgUrl: '/image/sectionTopSelling/3.png',
    },
]

export const SectionTopSelling = () => {
    return (
        <Box
            sx={{
                mt: '123px',
                fontFamily: 'poppins, sans-serif',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant={'subtitle2'}
                    sx={{
                        fontFamily: 'poppins, sans-serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#5E6282',
                    }}
                >
                    Top Selling
                </Typography>
                <Typography
                    variant={'h2'}
                    sx={{
                        fontFamily: 'Volkhov, serif',
                        fontWeight: 600,
                        color: '#14183E',
                    }}
                >
                    Top Destinations
                </Typography>
            </Box>
            <Box>
                <CustomList
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop: '60px',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '96px',
                            height: '252px',
                            position: 'absolute',
                            bottom: '46px',
                            right: '47px',
                            backgroundImage: 'url(/image/sectionTopSelling/Decore.svg)',
                            backgroundRepeat: 'no-repeat',
                            zIndex: -1,
                            backgroundSize: '100% 100%',
                        },
                    }}
                >
                    {topSaleTure.map(ele => {
                        const {id, country, cost, dayTrip, imgUrl} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                                sx={{
                                    position: 'relative',
                                    width: '315px',
                                    height: '457px',
                                    backgroundImage: `url(${imgUrl})`,
                                    backgroundPositionX: 'center',
                                    boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',
                                    borderRadius: '36px',
                                    overflow: 'hidden',
                                    zIndex: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        backgroundColor: 'white',
                                        width: '100%',
                                        height: '130px',
                                        color: '#5E6282',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '25px 25px 15px 25px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'poppins, sun-serif',
                                                fontSize: '18px',
                                            }}
                                        >
                                            {country}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'poppins, sans-serif',
                                                fontSize: '18px',
                                            }}
                                        >
                                            ${cost}K
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            padding: '0px 20px',
                                        }}
                                    >
                                        <IconNav/>
                                        <Typography
                                            sx={{
                                                ml: '14px',
                                                fontFamily: 'poppins, sans-serif',
                                                fontSize: '16px',
                                            }}
                                        >
                                            {dayTrip}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        )
                    })}
                </CustomList>
            </Box>
        </Box>
    )
}