import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Ryanflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color={"#e74c3c"} text={error} />}
      </Container>
    )}
    ;
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
