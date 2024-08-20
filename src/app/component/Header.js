'use client';
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Link from "next/link";
import {useState} from "react";
import {CustomImage, CustomLink, CustomList} from "@/utils/CustomElement";

const headerLink = [
    'Desitnations',
    'Hotels',
    'Flights',
    'Bookings'
];

const buttonAuth = [
    'Login',
    'Sign up',
];



export const Header = () => {
    const [Language, setLanguage] = useState('En');

    const handleChange = ({target: {value}}) => {
        setLanguage(value);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Box>
                <CustomImage
                    src={'/image/logo/Logo.png'}
                    alt={''}
                    width={116}
                    height={35}
                />
            </Box>
            <CustomList
                sx={{
                    display: 'flex',
                    marginLeft: '222px',
                    columnGap: '60px',
                }}
            >
                {headerLink.map((ele, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <CustomLink
                                href={''}
                                sx={{
                                    color: '#212832',
                                    fontFamily: 600,
                                }}
                            >
                                {ele}
                            </CustomLink>
                        </Box>
                    )
                })}
            </CustomList>
            <CustomList
                sx={{
                    display: 'flex',
                    marginLeft: '50px',
                    columnGap: '52px',
                }}
            >
                {buttonAuth.map((ele, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <Button
                                variant={index === 1 ? 'outlined' : 'text'}
                                sx={{
                                    borderColor: '#212832',
                                    color: '#212832',
                                }}
                            >
                                {ele}
                            </Button>
                        </Box>
                    )
                })}
            </CustomList>
            <Box>
                <FormControl
                    fullWidth
                     variant={'standard'}
                    sx={{
                        borderColor: 'transparent',
                    }}
                >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Language}
                        label="Language"
                        onChange={handleChange}

                    >
                        <MenuItem value={'En'}>En</MenuItem>
                        <MenuItem value={'Du'}>Du</MenuItem>
                        <MenuItem value={'Ua'}>Ua</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}