'use client';
import {Box, Typography} from "@mui/material";
import { useState, useEffect, useLayoutEffect } from "react";
import {CustomButton, CustomImage} from "@/utils/CustomElement";
import {IconArrowDown} from "@/utils/createSVG";

// let currentIndex = 0;

function rerangeCards(state, setState, positionBtn = 'up') {
    setState(prevState => {
        let updatedCards = [...prevState];
        if(positionBtn === 'up') {
            const movedCard = updatedCards.splice(0, 1);
            updatedCards.push(...movedCard);
        } else {
            const movedCard = updatedCards.splice(state.length - 1, 1);
            updatedCards.unshift(...movedCard)
        }
        return updatedCards;
    });
}

function shuffle(renderCard, setRenderCard, zIndex, setZIndex, positionBtn = 'up') {
    const index = positionBtn === 'up' ?  1 : renderCard.length - 1; // Последовательный индекс/последний индекс
    const card = document.getElementById(`card-${index}`);
    const offsetX = positionBtn === 'up' ? -card.offsetWidth : card.offsetWidth;
    const rotation = positionBtn === 'up' ? -5 : 5;

    card.style.transition = 'transform 0.6s ease-out';
    card.style.transform = `translateX(${offsetX}px) rotate(${rotation}deg)`;

    card.addEventListener('transitionend', function handleTransitionEnd() {
        card.removeEventListener('transitionend', handleTransitionEnd);

        setZIndex(zIndex + 1);

        card.style.zIndex = zIndex + 1;

        card.style.transition = 'transform 0.6s ease-out';
        card.style.transform = 'translateX(0) translateY(0) scale(1) rotate(0deg)';

        card.addEventListener('transitionend', function handleRearrange() {
            card.removeEventListener('transitionend', handleRearrange);
            rerangeCards(renderCard, setRenderCard, positionBtn);

        });
    });
}

function arrangeCards(cards) {
    cards.forEach((card, i) => {
        const cardElement = document.getElementById(`card-${i}`);
        cardElement.style.zIndex = cards.length - i;
        cardElement.style.transition = 'transform 0.6s ease-out';
        cardElement.style.transform = `translate(${i * 8}px, ${i * 8}px) scale(${1 - i * 0.02})`;
    });
}

export const NewAnimationCards = ({arrCards}) => {
    const [renderCard, setRenderCard] = useState(arrCards);
    const [zIndex, setZIndex] = useState(arrCards.length);

    useLayoutEffect(() => {
        arrangeCards(renderCard);
    }, [renderCard]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                component={'ul'}
                sx={{
                    marginBottom: '0px',
                    padding: '50px',
                    width: '500px',
                    height: '230px',
                    listStyle: 'none',
                    position: 'relative'
                }}
            >
                {renderCard.map((ele, index) => {
                    const { id, avatar, authorName, country, comment } = ele;
                    const targetX = index * 8;
                    const targetY = index * 8;
                    const targetScale = 1 - index * 0.02;
                    return (
                        <Box
                            key={index}
                            id={`card-${index}`}
                            component={'li'}
                            sx={{
                                position: 'absolute',
                                top: '0px',
                                left: '-100px',
                                width: '100%',
                                height: '230px',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                                boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',
                                zIndex: index,
                                transition: 'transform 0.6s ease-out, z-index 0.6s ease-out',
                                transform: `translate(${targetX}px, ${targetY}px) scale(${targetScale})`,
                                padding: '40px',
                            }}
                        >
                            <CustomImage
                                src={avatar}
                                alt={''}
                                width={50}
                                height={50}
                                sx={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    borderRadius: '50%',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: '#5E6282',
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '16px',
                                    lineHeight: 1.75
                                }}
                            >
                                {comment}
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '15px',
                                    color: '#5E6282',
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '20px',
                                    fontWeight: 600
                                }}
                            >
                                {authorName}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#5E6282',
                                    fontFamily: 'poppins, sans-serif',
                                    fontSize: '14px'
                                }}
                            >
                                {country}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '40px', marginTop: '100px' }}>
                <CustomButton
                    onClick={() => shuffle(renderCard, setRenderCard, zIndex, setZIndex, 'up')}
                    sx={{
                        border: '0px solid transparent',
                        backgroundColor: 'transparent',
                        width: '30px'
                    }}
                >
                    <IconArrowDown
                        sx={{
                            rotate: '180deg'
                        }}
                    />
                </CustomButton>
                <CustomButton
                    onClick={() => shuffle(renderCard, setRenderCard, zIndex, setZIndex, 'down')}
                    sx={{
                        border: '0px solid transparent',
                        backgroundColor: 'transparent',
                        width: '30px'
                    }}
                >
                    <IconArrowDown />
                </CustomButton>
            </Box>

        </Box>
    );
};

