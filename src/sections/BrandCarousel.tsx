// src/components/BrandCarousel.tsx
import React, { FC, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel
import src from "@emotion/styled";

const brandImages = [
  { src: "src/assets/davis-cup.2ozNmnfW.svg", alt: "Davis Cup" },
  { src: "src/assets/everton.CkPHQEMd.svg", alt: "Everton" },
  {
    src: "src/assets/billie-jean-king-cup.DFDdNsJj.svg",
    alt: "Billie Jean King Cup",
  },
  { src: "src/assets/ufc.BlG4twI0.svg", alt: "Real Madrid" },
  { src: "src/assets/team-secret.BH46cAxZ.svg", alt: "Secret" },
  { src: "src/assets/drake.C1S9VFRt.svg", alt: "Drake" },
  { src: "src/assets/f1-logo.C8neaUBw.svg", alt: "F1" },
];

const BrandCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (
      scroller &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLElement;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <Box
      ref={scrollerRef}
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        marginTop: 5,
        marginBottom: 5,
      }}
      data-speed="fast"
      data-direction="left"
    >
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box
          className="scroller__inner"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "10rem",
            paddingBlock: "1rem",
            animation: "scroll 40s linear infinite",
            width: "max-content",
            // mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
            WebkitMask:
              "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          }}
        >
          {brandImages.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              style={{
                width: "100px", // Set a fixed width for all images
                height: "100px", // Set a fixed height for all images
              }}
            />
          ))}
        </Box>
        <style>
          {`
          @keyframes scroll {
            to {
              transform: translateX(-50%);
              }
              }
              `}
        </style>
      </Box>
    </Box>
  );
};

export default BrandCarousel;
