'use client';
import {Box, Button, Input, Typography} from "@mui/material";
import {CircleStyle, CustomForm, CustomImage, CustomInput, CustomLabel} from "@/utils/CustomElement";
import {IconSubscribe} from "@/utils/createSVG";

export const SectionSubscribe = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                padding: '100px',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '1170px',
                    backgroundColor: 'rgba(223,215,249,0.3)',
                    borderRadius: '200px 20px 20px 20px',
                    padding: '100px 0px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        textAlign: 'center',

                    }}
                >
                    <Typography
                        variant={'h3'}
                        sx={{
                            fontFamily: 'poppins, sans-serif',
                            fontSize: '33px',
                            fontWeight: 600,
                            lineHeight: 1.7,
                            color: '#5E6282',
                            width: '859px',


                        }}
                    >
                        Subscribe to get information, latest news and other
                        interesting offers about Jadoo
                    </Typography>
                </Box>
                <CustomForm
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        columnGap: '24px',
                        marginTop: '74px',
                    }}
                >
                    <CustomLabel>
                        <CustomInput
                            name={'mail'}
                            type={'email'}
                            placeholder={'Your email'}
                            sx={{
                                width: '392px',
                                height: '48px',
                                padding: '10px 30px',
                                border: '0px solid transparent',
                                borderRadius: '10px',
                            }}
                        />
                    </CustomLabel>
                    <Button
                        sx={{
                            width: '180px',
                            borderRadius: '10px',
                            background: 'linear-gradient(90deg, rgba(255,148,109,1) 0%, rgba(255,125,104,1) 100%)',
                            color: 'white',
                        }}
                    >
                        Subscribe
                    </Button>
                </CustomForm>
                <CircleStyle
                    sx={{
                        width: '252px',
                        height: '252px',
                        bottom: '-93px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '282px',
                        height: '282px',
                        bottom: '-98px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '308px',
                        height: '308px',
                        bottom: '-103px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '332px',
                        height: '332px',
                        bottom: '-106px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '354px',
                        height: '354px',
                        bottom: '-110px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '389px',
                        height: '389px',
                        bottom: '-114px',
                        left: '30px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '184px',
                        height: '184px',
                        top: '86px',
                        right: '-67px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '206px',
                        height: '206px',
                        top: '66px',
                        right: '-70px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '226px',
                        height: '226px',
                        top: '47px',
                        right: '-74px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '242px',
                        height: '242px',
                        top: '28px',
                        right: '-77px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '259px',
                        height: '259px',
                        top: '8px',
                        right: '-79px',
                    }}
                />
                <CircleStyle
                    sx={{
                        width: '284px',
                        height: '284px',
                        top: '-17px',
                        right: '-82px',
                    }}
                />
            </Box>
            <IconSubscribe
                sx={{
                    position: 'absolute',
                    top: '80px',
                    right: '90px',
                    width: '70px',
                    height: '70px',
                }}
            />
            <CustomImage
                src={'/image/sectionSubscribe/GroupPlusesSub.png'}
                alt={''}
                width={153}
                height={156}
                sx={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '10px',
                }}
            />
        </Box>
    )
}