import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import {Box, Button} from "@mui/material";

export const CustomList = styled(props => {
    const {sx, ...other} = props;
    return <ul {...other}/>
})(({sx}) => {
    return {
        listStyle: 'none',
        padding: 0,
        ...sx,
    }
});

export const CustomImage = styled(props => {
    const {sx, src, alt, width, height, ...other} = props;
    return <Image src={src} alt={alt} width={width} height={height} {...other}/>
})(({sx}) => {
    return {
        display: 'block',
        ...sx,
    }
});

export const CustomLink = styled(props => {
    const {sx, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) =>{
    return {
        textDecoration: 'none',
        ...sx,
    }
});

export const CustomSpan = styled(props => {
    const {sx, ...other} = props;
    return <span {...other}/>
})(({sx}) => {
    return {
        position: 'relative',
        '&:before': {
            content: '""',
            display: 'block',
            width: '200%',
            height: '12px',
            position: 'absolute',
            bottom: '8px',
            left: '-20%',
            backgroundImage: 'url(/image/titleImg/underlining.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
        },
        ...sx,
    }
});

export const CustomButton = styled(props => {
    const {sx, ...other} = props;
    return <Button {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const BigDot = styled(props => {
    const {sx, bgC, ...other} = props;
    return <Box {...other}/>
})(({sx, bgC}) => {
    return {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: bgC,
        ...sx,
    }
});

export const CustomForm = styled(props => {
    const {sx, method, ...other} = props;
    return <form method={method} {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const CustomInput = styled(props => {
    const {sx, name, type, placeholder = '', ...other} = props;
    return <input name={name} type={type} placeholder={placeholder} {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const CustomLabel = styled(props => {
    const {sx, ...other} = props;
    return <label {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const CircleStyle = styled(props => {
    const {sx, ...other} = props;
    return <Box {...other}/>
})(({sx}) => {
    return {
        display: 'inline-block',
        position: 'absolute',
        borderRadius: '50%',
        border: '1px solid RGBA(98, 70, 229, 0.2)',
        zIndex: -1,
        ...sx,
    }
})

