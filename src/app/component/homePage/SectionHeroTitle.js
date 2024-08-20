'use client';
import {Box, Button, Typography} from "@mui/material";
import {CustomImage, CustomList, CustomSpan} from "@/utils/CustomElement";
import {IconPlay} from "@/utils/createSVG";


export const SectionHeroTitle = () => {
    return (
        <Box
            sx={{
                width: '630px',
                mt: '135px',
            }}
        >
            <Typography
                variant={'subtitle2'}
                sx={{
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.7rem',
                    color: '#DF6951',
                    textShadow: '0px 5px 3px rgba(0, 0, 0, 0.25)'
                }}
            >
                Best Destinations around the world
            </Typography>
            <Typography
                variant={'h1'}
                sx={{
                    fontFamily: 'Volkhov, serif',
                    fontWeight: 600,
                    fontSize: '5.5rem',
                    color: '#181E4B',
                }}
            >
                Travel, <CustomSpan>enjoy</CustomSpan> and live a new and full life
            </Typography>
            <Typography
                variant={'p'}
                sx={{
                    fontFamily: 'poppins, sans-serif',
                    fontSize: '20px',
                    lineHeight: 1.7,
                    color: '#5E6282',
                    display: 'inline-block',
                    width: '477px',
                    marginTop: '30px',
                }}
            >
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </Typography>
            <CustomList
                sx={{
                    display: 'flex',
                    columnGap: '37px',
                    marginTop: '40px',
                }}
            >
                <Box
                    component={'li'}
                >
                    <Button
                        sx={{
                            width: '170px',
                            height: '60px',
                            color: 'white',
                            backgroundColor: '#F1A501',
                            borderRadius: '10px',
                            boxShadow: '0px 7px 15px RGBA(241, 165, 1, 0.5)',

                        }}
                    >
                        Find out more
                    </Button>
                </Box>
                <Box
                    component={'li'}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '21px',
                    }}
                >
                    <Button
                        sx={{
                            minWidth: 'unset',
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#DF6951',
                            borderRadius: '50%',
                            boxShadow: '0px 7px 15px RGBA(223, 105, 81, 0.5)',
                        }}
                    >
                        <IconPlay
                            sx={{
                                width: '15px',
                                height: '15px',
                                fill: 'white',
                            }}
                        />
                    </Button>
                    <Typography
                        sx={{
                            color: '#686D77',
                            fontSize: '17px',
                            fontWeight: 600,
                            fontFamily: 'poppins, sans-serif'
                        }}
                    >
                        Play Demo
                    </Typography>
                </Box>
            </CustomList>
        </Box>
    )
}