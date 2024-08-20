'use client';
import {Box, Typography} from "@mui/material";
import {CustomImage, CustomList} from "@/utils/CustomElement";
import {IconAntenna, IconMicrophone, IconPlane, IconSupply} from "@/utils/createSVG";

const listData = [
    {
        id: 1,
        title: 'Calculated Weather',
        description: 'Built Wicket longer admire do barton vanity itself do in it.',
        imgUrl: <IconAntenna
                    sx={{
                        width: '67px',
                        height: '70px',
                    }}
                />,
        top: '30px',
        left: '100px',
        borderRadius: '0px 0 20px 0px',
    },
    {
        id: 2,
        title: 'Best Flights',
        description: 'Engrossed listening. Park gate sell they west hard for the.',
        imgUrl: <IconPlane
                    sx={{
                        width: '167px',
                        height: '70px',
                    }}
                />,
        top: '0px',
        left: '30px',
        borderRadius: '20px 0 0 0px',
    },
    {
        id: 3,
        title: 'Local Events',
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
        imgUrl: <CustomImage
                    src={'/image/sectionBestServices/microphone.png'}
                    alt={''}
                    width={40}
                    height={70}
                    sx={{

                    }}
                />,
        top: '0px',
        left: '100px',
        borderRadius: '0px 20px 0 0px',
    },
    {
        id: 4,
        title: 'Customization',
        description: 'We deliver outsourced aviation services for military customers',
        imgUrl: <IconSupply
                    sx={{
                        width: '70px',
                        height: '70px',
                    }}
                />,
        top: '30px',
        left: '30px',
        borderRadius: '0px 0 0 20px',
    },
]

export const SectionCategoryBestServices = () => {
    return (
        <Box
            sx={{
                mt: '100px',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <Typography
                    variant={'subtitle2'}
                    sx={{
                        textAlign: 'center',
                        color: '#5E6282',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,

                    }}
                >
                    CATEGORY
                </Typography>
                <Typography
                    variant={'h2'}
                    sx={{
                        textAlign: 'center',
                        color: '#14183E',
                        fontFamily: 'Volkhov, serif',
                        fontWeight: 600,
                    }}
                >
                    We Offer Best Services
                </Typography>
                <CustomImage
                    src={'/image/sectionBestServices/pluses.png'}
                    alt={''}
                    width={153}
                    height={166}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                />
            </Box>
            <Box
                sx={{
                    mt: '108px',
                }}
            >
                <CustomList
                    component={'ul'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {listData.map(ele => {
                        const {id, title, description, imgUrl, top, left, borderRadius} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    width: '267px',
                                    height: '314px',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',

                                    },
                                    borderRadius: '36px',
                                    '&:after': {
                                        content: '""',
                                        display: 'block',
                                        width: '100px',
                                        height: '100px',
                                        position: 'absolute',
                                        borderRadius: '40px 40px 0px 0px',
                                        bottom: '-30px',
                                        left: '-30px',
                                        zIndex: -1,
                                    },
                                    '&:hover::after ': {
                                        backgroundColor: '#DF6951',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '181px',
                                        height: '229px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            '&:after': {
                                                content: '""',
                                                display: 'block',
                                                width: '50px',
                                                height: '49px',
                                                borderRadius: {borderRadius},
                                                position: 'absolute',
                                                top: {top},
                                                left: {left},
                                                backgroundColor: '#FFF1DA',
                                                zIndex: -1,
                                            },
                                        }}
                                    >
                                        {imgUrl}
                                    </Box>
                                    <Box
                                        sx={{
                                            marginTop: '34px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#1E1D4C',
                                                fontSize: '18px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: '15px',
                                                color: '#5E6282',
                                                fontSize: '18px',
                                            }}
                                        >
                                            {description}
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