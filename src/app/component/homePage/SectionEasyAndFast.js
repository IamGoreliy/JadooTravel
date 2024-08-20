'use client';
import {Box, Typography} from "@mui/material";
import {CustomButton, CustomImage, CustomList} from "@/utils/CustomElement";
import {IconBuilding, IconChoose, IconHeart, IconLeaf, IconMake, IconMap, IconReach, IconSend} from "@/utils/createSVG";

const listСharacteristics = [
    {
        id: 1,
        icon: <IconChoose
                sx={{
                    width: '47px',
                    height: '48px',
                }}
              />,
        title: 'Choose Destination',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
        id: 2,
        icon: <IconMake
                sx={{
                    width: '47px',
                    height: '48px',
                }}
              />,
        title: 'Make Payment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
        id: 3,
        icon: <IconReach
                sx={{
                    width: '47px',
                    height: '48px',
                }}
              />,
        title: 'Reach Airport on Selected Date',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
];

const listBtnForCardPresent = [
    {
        id: 1,
        icon: <IconLeaf
                sx={{
                    width: '14px',
                    height: '14px',
                }}
              />,
    },
    {
        id: 2,
        icon: <IconMap
                sx={{
                    width: '14px',
                    height: '14px',
                }}
              />,
    },
    {
        id: 3,
        icon: <IconSend
                sx={{
                    width: '14px',
                    height: '14px',
                }}
              />,
    },
];

const progressBar = (percentDone = 0) => {
    const result = 100 * (percentDone / 100) ;
    return `${result}%`;
}

export const SectionEasyAndFast = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: '118px',
                mt: '186px',

            }}
        >
            <Box
                sx={{
                    flexBasis: 'calc((100% / 2) - 118px)',
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
                    Easy and Fast
                </Typography>
                <Typography
                    variant={'h2'}
                    sx={{
                        fontFamily: 'Volkhov, serif',
                        fontWeight: 600,
                        color: '#14183E',
                    }}
                >
                    Book your next trip in 3 easy steps
                </Typography>
                <CustomList
                    sx={{
                        marginTop: '31px',
                    }}
                >
                    {listСharacteristics.map(ele => {
                        const {id, icon, title, desc} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                                sx={{
                                    display: 'flex',
                                    columnGap: '21px',
                                    '& + &': {
                                        mt: '48px',
                                    },
                                }}
                            >
                                <Box>
                                    {icon}
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'poppins, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                            color: '#5E6282',
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'poppins, sans-serif',
                                            color: '#5E6282',
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </CustomList>
            </Box>
            <Box
                sx={{
                    flexBasis: 'calc((100% / 2) - 118px)',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '320px',
                        padding: '25px 20px',
                        borderRadius: '36px',
                        boxShadow: '40px -40px 60px RGBA(89, 177, 230, 0.25), 0px 45px 50px RGBA(0, 0, 0, 0.1)',
                    }}
                >
                    <CustomImage
                        src={'/image/sectionEasyAndFast/imgGreece.jpg'}
                        alt={''}
                        width={321}
                        height={161}
                        sx={{

                        }}
                    />
                    <Typography
                        sx={{
                            mt: '26px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#080809',
                        }}
                    >
                        Trip To Greece
                    </Typography>
                    <Typography
                        sx={{
                            mt: '13px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 500,
                            fontSize: '18px',
                            color: '#84829A'

                        }}
                    >
                        14-29 June | by Robbin joseph
                    </Typography>
                    <CustomList
                        sx={{
                            display: 'flex',
                            marginTop: '21px',
                        }}
                    >
                        {listBtnForCardPresent.map(ele => {
                            const {id, icon,} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    sx={{
                                        '& + &': {
                                            marginLeft: '18px',
                                        },
                                    }}
                                >
                                    <CustomButton
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            border: '0px solid transparent',
                                        }}
                                    >
                                        {icon}
                                    </CustomButton>
                                </Box>
                            )
                        })}
                    </CustomList>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: '29px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '10px',
                            }}
                        >
                            <IconBuilding
                                sx={{
                                    width: '16px',
                                    height: '16px',
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'poppins, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#84829A'
                                }}
                            >
                                24 people going
                            </Typography>
                        </Box>
                        <Box>
                            <IconHeart/>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            display: 'flex',
                            paddingTop: '18px',
                            paddingLeft: '20px',
                            paddingBottom: '22px',
                            width: '243px',
                            backgroundColor: 'white',
                            borderRadius: '18px',
                            boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',
                            bottom: '55px',
                            right: '-110px',
                        }}
                    >
                        <Box>
                            <CustomImage
                                src={'/image/sectionEasyAndFast/iconItaly.png'}
                                alt={''}
                                width={50}
                                height={50}
                                sx={{

                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                ml: '12px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#84829A',
                                }}
                            >
                                Ongoing
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    letterSpacing: 1.09,
                                    color: '#080809',
                                }}
                            >
                                Trip to rome
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '14px',
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#080809',
                                }}
                            >
                                <span style={{color: '#8A79DF'}}>40%</span> completed
                            </Typography>
                            <Box
                                sx={{
                                    mt: '10px',
                                    width: '150px',
                                    height: '6px',
                                    borderRadius: '5px',
                                    backgroundColor: '#F5F5F5',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: progressBar(40),
                                        height: '6px',
                                        borderRadius: '5px',
                                        backgroundColor: '#8A79DF',

                                    }}
                                >

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}