// 'use client';
// import {Box, Button, Typography} from "@mui/material";
// import {BigDot, CustomButton, CustomImage, CustomList} from "@/utils/CustomElement";
// import {IconArrowDown} from "@/utils/createSVG";
// import {useCallback, useEffect, useLayoutEffect, useState} from "react";
// import styled from "@emotion/styled";
//
// const comments = [
//     {
//         id: 0,
//         avatar: '/image/sectionAboutUS/MikeTaylor.jpg',
//         authorName: 'Mike Taylor',
//         country: 'Stockholm, Sweden',
//         comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
//     },
//     {
//         id: 1,
//         avatar: '/image/sectionAboutUS/PatricStevenson.jpeg',
//         authorName: 'Patric Stevenson',
//         country: 'Lisbon, Portugal',
//         comment: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
//     },
//     {
//         id: 2,
//         avatar: '/image/sectionAboutUS/RobDouglas.jpeg',
//         authorName: 'Rob Douglas',
//         country: 'New York, USA',
//         comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//     },
// ];
//
// const managingListCommentsUp = (idComments, setIdComments, setStartTransition, setEndTransition, arr = []) => {
//     setTimeout(() => {
//         setIdComments(prevState =>
//             (prevState + 1) % arr.length
//         )
//         setEndTransition(false);
//         setStartTransition(false);
//     }, 2000);
// }
// const managingListCommentsDown = (idComments, setIdComments, setStartTransition, setEndTransition, arr = []) => {
//     setTimeout(() => {
//         setIdComments(prevState => {
//             return prevState - 1 < 0 ? arr.length - 1 : prevState - 1;
//         })
//         setEndTransition(false);
//         setStartTransition(false);
//     }, 2000);
// }
//
// const counterId = (idIsOpen, quantityArr) => (idIsOpen + 1) % quantityArr;
//
// const fnTransformUp = (idCard, whatCardOpen, start, end, arr) => {
//     let result;
//     const thisIsCard = idCard === whatCardOpen;
//     if (start && thisIsCard) {
//         result = {
//             transform: 'translateY(-260px) scale(0.9)',
//         };
//     }
//     if (end && !thisIsCard && counterId(whatCardOpen, arr.length) === idCard) {
//         result = {
//             transform: 'translateY(30px) scale(1.2)',
//         };
//     }
//     return result;
// }
//
// const fnTransformDown = (idCard, whatCardOpen, start, end, arr) => {
//     let result;
//     const lastCardId = whatCardOpen - 1 < 0 ? arr.length - 1 : whatCardOpen - 1;
//     const comparison = idCard === lastCardId;
//     if (start && comparison) {
//         result = {
//             transform: 'translateY(-350px) scale(0.9)',
//         };
//     }
//     if (end && !comparison) {
//         result = {
//             // transform: 'scale(0.7)',
//         };
//     }
//     return result;
// }
//
//
// export const SectionAboutUs = ({color}) => {
//     const [stackComments, setStackComments] = useState([...comments])
//     const [idComments, setIdComments] = useState(0);
//     const [btnUp, setBtnUp] = useState(false);
//     const [btnDown, setBtnDown] = useState(false);
//     const [startTransition, setStartTransition] = useState(false);
//     const [endTransition, setEndTransition] = useState(false);
//
//
//
//     const fnTransitionUp = useCallback((idCard, whatCardOpen, arr = []) => {
//         let result;
//         if (btnUp) {
//             result = fnTransformUp(idCard, whatCardOpen, startTransition, endTransition, arr);
//         }
//         if (btnDown) {
//             result = fnTransformDown(idCard, whatCardOpen, startTransition, endTransition, arr);
//         }
//
//
//
//
//         return  {
//             position: 'absolute',
//             // border: '1px solid black',
//             padding: '40px',
//             width: '500px',
//             height: '230px',
//             top: idCard === whatCardOpen ? 0 : '40px',
//             left: idCard === whatCardOpen? 0 : '40px',
//             zIndex: whatCardOpen === idCard ? 2 : counterId(whatCardOpen, arr.length) === idCard ? 1 : 0 ,
//             backgroundColor: 'white',
//             borderRadius: '10px',
//             boxShadow: '0px 45px 50px RGBA(0, 0, 0, 0.1)',
//             ...result,
//             transition: 'transform 1000ms linear, scale 1000ms linear 500ms',
//         }
//
//     }, [startTransition, endTransition])
//
//     useEffect(() => {
//         if(btnUp) {
//             setBtnUp(false);
//             managingListCommentsUp(idComments, setIdComments, setStartTransition, setEndTransition, comments);
//         }
//         if (btnDown) {
//             setBtnDown(false);
//             managingListCommentsDown(idComments, setIdComments, setStartTransition, setEndTransition, comments);
//         }
//     }, [btnUp, btnDown]);
//
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 backgroundColor: color,
//                 borderRadius: '20px',
//                 width: '1352px',
//                 height: '460px',
//                 padding: '20px',
//             }}
//         >
//             <Box
//                 sx={{
//                     flexBasis: 'calc((100% * 0.4) - 50px)',
//                     mt: '20px',
//                 }}
//             >
//                 <Typography
//                     variant={'subtitle2'}
//                     sx={{
//                         fontFamily: 'poppins, sans-serif',
//                         fontWeight: 600,
//                         fontSize: '18px',
//                         color: '#5E6282',
//                     }}
//                 >
//                     Testimonials
//                 </Typography>
//                 <Typography
//                     variant={'h2'}
//                     sx={{
//                         fontFamily: 'Volkhov, serif',
//                         fontWeight: 600,
//                         color: '#14183E',
//                     }}
//                 >
//                     What people say about Us.
//                 </Typography>
//
//             </Box>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     columnGap: '40px',
//                     flexBasis: 'calc((100% * 0.5) - 50px)',
//                     height: '350px',
//                     mt: '50px',
//
//                 }}
//             >
//                 <CustomList
//                     sx={{
//                         position: 'relative',
//                         width: '601px',
//                         height: '400px',
//                     }}
//                 >
//                     {stackComments.map((ele, index) => {
//                         const {id, avatar, authorName, country, comment} = ele;
//                         return (
//                             <Box
//                                 key={id}
//                                 component={'li'}
//                                 sx={fnTransitionUp(id, idComments, comments)}
//                             >
//                                 <Box
//                                     sx={{
//                                         position: 'absolute',
//                                         top: '-30px',
//                                         left: '-30px',
//                                     }}
//                                 >
//                                     <CustomImage
//                                         src={avatar}
//                                         alt={''}
//                                         width={68}
//                                         height={68}
//                                         sx={{
//                                             borderRadius: '50%',
//                                         }}
//                                     />
//                                 </Box>
//                                 <Box
//
//                                 >
//                                     <Typography
//                                         sx={{
//                                             color: '#5E6282',
//                                             fontFamily: 'poppins, sans-serif',
//                                             fontSize: '16px',
//                                             lineHeight: 1.75,
//                                         }}
//                                     >
//                                         {comment}
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             mt: '15px',
//                                             color: '#5E6282',
//                                             fontFamily: 'poppins, sans-serif',
//                                             fontSize: '20px',
//                                             fontWeight: 600,
//                                         }}
//                                     >
//                                         {authorName}
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             color: '#5E6282',
//                                             fontFamily: 'poppins, sans-serif',
//                                             fontSize: '14px',
//                                         }}
//                                     >
//                                         {country}
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         )
//                     })}
//                 </CustomList>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         rowGap: '40px',
//                         marginTop: '100px',
//                     }}
//                 >
//                     <CustomButton
//                         onClick={() => {
//                             setBtnUp(true);
//                             setStartTransition(true);
//                             setEndTransition(true);
//                         }}
//                         sx={{
//                             border: '0px solid transparent',
//                             backgroundColor: 'transparent',
//                             width: '30px',
//                         }}
//                     >
//                         <IconArrowDown
//                             sx={{
//                                rotate: '180deg',
//                             }}
//                         />
//                     </CustomButton>
//                     <CustomButton
//                         onClick={() => {
//                             setBtnDown(true);
//                             setStartTransition(true);
//                             setEndTransition(true);
//                         }}
//                         sx={{
//                             border: '0px solid transparent',
//                             backgroundColor: 'transparent',
//                             width: '30px',
//                         }}
//                     >
//                         <IconArrowDown/>
//                     </CustomButton>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }
//