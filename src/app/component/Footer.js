'use client';
import {Box, Typography} from "@mui/material";
import {CustomImage, CustomLink, CustomList} from "@/utils/CustomElement";
import {IconAppStore, IconFacebook, IconGooglePlay, IconInstagram, IconTwitter} from "@/utils/createSVG";

const linkCompany = [
    {
        id: 1,
        name: 'About',
        href: '',
    },
    {
        id: 2,
        name: 'Careers',
        href: '',
    },
    {
        id: 3,
        name: 'Mobile',
        href: '',
    },
];

const linkContacts = [
    {
        id: 1,
        name: 'Help/FAQ',
        href: '',
    },
    {
        id: 2,
        name: 'Press',
        href: '',
    },
    {
        id: 3,
        name: 'Affilates',
        href: '',
    },
];

const linkMore = [
    {
        id: 1,
        name: 'Airlinefees',
        href: '',
    },
    {
        id: 2,
        name: 'Airline',
        href: '',
    },
    {
        id: 3,
        name: 'Low fare tips',
        href: '',
    },
]

export const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                padding: '117px',
            }}
        >
            <Box>
                <Typography
                    variant={'h4'}
                >
                    Jadoo.
                </Typography>
                <Typography>
                    Book your trip in minute, get full <br/> Control for much longer.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    ml: '83px',
                }}
            >
                <Box>
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#080809',
                            fontSize: '21px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                        }}
                    >
                        Company
                    </Typography>
                    <CustomList
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {linkCompany.map(ele => {
                            const {id, name, href} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                >
                                    <CustomLink
                                        href={href}
                                        sx={{
                                            fontFamily: 'poppins, sans-serif',
                                            fontSize: '18px',
                                            color: '#5E6282',
                                        }}
                                    >
                                        {name}
                                    </CustomLink>
                                </Box>
                            )
                        })}
                    </CustomList>
                </Box>
                <Box
                    sx={{
                        ml: '80px',
                    }}
                >
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#080809',
                            fontSize: '21px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                        }}
                    >
                        Contact
                    </Typography>
                    <CustomList
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {linkContacts.map(ele => {
                            const {id, name, href} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                >
                                    <CustomLink
                                        href={href}
                                        sx={{
                                            fontFamily: 'poppins, sans-serif',
                                            fontSize: '18px',
                                            color: '#5E6282',
                                        }}
                                    >
                                        {name}
                                    </CustomLink>
                                </Box>
                            )
                        })}
                    </CustomList>
                </Box>
                <Box
                    sx={{
                        ml: '80px',
                    }}
                >
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#080809',
                            fontSize: '21px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                        }}
                    >
                        More
                    </Typography>
                    <CustomList
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {linkMore.map(ele => {
                            const {id, name, href} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                >
                                    <CustomLink
                                        href={href}
                                        sx={{
                                            fontFamily: 'poppins, sans-serif',
                                            fontSize: '18px',
                                            color: '#5E6282',
                                        }}
                                    >
                                        {name}
                                    </CustomLink>
                                </Box>
                            )
                        })}
                    </CustomList>
                </Box>
            </Box>
            <Box
                sx={{
                    ml: '82px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <CustomLink
                        href={''}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '41px',
                            height: '41px',
                            borderRadius: '50%',
                            boxShadow: '0px 5px 10px RGBA(0, 0, 0, 0.1)',
                        }}
                    >
                        <IconFacebook
                            sx={{
                                fill: 'black',
                                width: '20px',
                                height: '20px',
                            }}
                        />
                    </CustomLink>
                    <CustomLink
                        href={''}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '41px',
                            height: '41px',
                            borderRadius: '50%',
                            boxShadow: '0px 5px 10px RGBA(0, 0, 0, 0.1)',
                        }}
                    >
                        <IconInstagram/>
                    </CustomLink>
                    <CustomLink
                        href={''}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '41px',
                            height: '41px',
                            borderRadius: '50%',
                            boxShadow: '0px 5px 10px RGBA(0, 0, 0, 0.1)',
                        }}
                    >
                        <IconTwitter/>
                    </CustomLink>
                </Box>
                <Box>
                    <Typography
                        variant={'subtitle2'}
                        sx={{
                            color: '#5E6282',
                            fontFamily: 'poppins, sans-serif',
                            fontSize: '21px',
                        }}
                    >
                        Discover our app
                    </Typography>
                    <Box>
                        <IconGooglePlay
                            sx={{
                                width: '107px',
                                height: '35px',
                            }}
                        />
                        <IconAppStore
                            sx={{
                                width: '107px',
                                height: '35px',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}