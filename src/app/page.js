import Image from "next/image";
import styles from "./page.module.css";
import {Box} from "@mui/material";
import {SectionHeroTitle} from "@/app/component/homePage/SectionHeroTitle";
import {SectionCategoryBestServices} from "@/app/component/homePage/SectionCategoryBestServices";
import {SectionTopSelling} from "@/app/component/homePage/SectionTopSelling";
import {SectionEasyAndFast} from "@/app/component/homePage/SectionEasyAndFast";
import {SectionAboutUs} from "@/app/component/homePage/sectionAboutUs/SectionAboutUs";
import {OurPartners} from "@/app/component/homePage/OurParters";
import {SectionSubscribe} from "@/app/component/homePage/SectionSubscribe";
import {RenderCarousel} from "@/app/component/homePage/sectionAboutUs/RenderCarousel";

export default function Home() {
  return (
    <Box>
        <SectionHeroTitle/>
        <SectionCategoryBestServices/>
        <SectionTopSelling/>
        <SectionEasyAndFast/>
        {/*<SectionAboutUs/>*/}
        <RenderCarousel/>
        <OurPartners/>
        <SectionSubscribe/>
    </Box>
  );
}
