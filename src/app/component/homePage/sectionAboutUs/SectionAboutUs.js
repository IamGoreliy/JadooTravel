'use client';
import {Box, Typography} from "@mui/material";
import {NewAnimationCards} from "@/app/component/homePage/sectionAboutUs/NewAnimationCards";

const comments = [
    {
        id: 0,
        avatar: '/image/sectionAboutUS/MikeTaylor.jpg',
        authorName: 'Mike Taylor',
        country: 'Stockholm, Sweden',
        comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    },
    {
        id: 1,
        avatar: '/image/sectionAboutUS/PatricStevenson.jpeg',
        authorName: 'Patric Stevenson',
        country: 'Lisbon, Portugal',
        comment: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text...",
    },
    {
        id: 2,
        avatar: '/image/sectionAboutUS/RobDouglas.jpeg',
        authorName: 'Rob Douglas',
        country: 'New York, USA',
        comment: "There are many variations of passages of Lorem Ipsum available...",
    },
];

export const SectionAboutUs = ({color}) => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: color,
                borderRadius: '20px',
                width: '1352px',
                height: '460px',
                padding: '20px',
            }}
        >
            <Box
                sx={{
                    flexBasis: 'calc((100% * 0.4) - 50px)',
                    mt: '20px',
                }}
            >
                <Typography
                    variant={'subtitle2'}
                    sx={{
                        fontFamily: 'poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: '#5E6282',
                    }}
                >
                    Testimonials
                </Typography>
                <Typography
                    variant={'h2'}
                    sx={{
                        fontFamily: 'Volkhov, serif',
                        fontWeight: 600,
                        color: '#14183E',
                    }}
                >
                    What people say about Us.
                </Typography>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '40px',
                    flexBasis: 'calc((100% * 0.5) - 50px)',
                    height: '350px',
                    mt: '50px',
                }}
            >
                <NewAnimationCards arrCards={comments}/>
            </Box>
        </Box>
    );
};
