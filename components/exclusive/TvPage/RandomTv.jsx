import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { getRandomTV } from "../../../api-routes/api-TMDb";

function RandomTv() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [randomTV, setRandomTV] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(Math.floor(Math.random() * 100));

  const pageNumberUpdater = () => {
    setPageNumber(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    getRandomTV(setIsLoading, setRandomTV, pageNumber);
    pageNumberUpdater();
  }, []);
  return (
    <>
      <SectionTitle>Random TV Shows</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : randomTV.map((tv, key) => {
              return (
                <TitleContainer key={key}>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      layout="fill"
                      alt={tv.title}
                    ></Image>
                  </ImageContainer>
                  <TitleText>{tv.name}</TitleText>
                </TitleContainer>
              );
            })}
      </RowContainer>
    </>
  );
}

export default RandomTv;
