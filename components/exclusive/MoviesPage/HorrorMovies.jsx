import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function HorrorMovies({ horrorMovies }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Horror</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {horrorMovies.map((movie, key) => {
          return (
            <TitleContainer key={key}>
              <Link href={`/title/movies/${movie.id}`}>
                <a>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      layout="fill"
                      alt={movie.title}
                      priority={true}
                    />
                  </ImageContainer>
                </a>
              </Link>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default HorrorMovies;
