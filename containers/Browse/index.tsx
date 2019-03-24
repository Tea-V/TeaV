import React from 'react';
import idx from 'idx';

import PageContainer from ':components/PageContainer';
import spacing from ':theme/spacing';
import throttle from ':utils/throttle';
import useQuery from ':hooks/useQuery';
import { Movie, Query } from ':types/schema';

import Header from './Header';
import Poster from './Poster';

type BrowseProps = {
  token: string;
};

const moviesQuery = `
query($title: String) {
  movies(title: $title) {
    edges {
      node {
        id
        title
      }
    }
  }
}
`;

export default function Browse({ token }: BrowseProps) {
  const [movies, setMovies] = React.useState<Movie[] | null>(null);
  const [titleMatch, setTitleMatch] = React.useState<string | null>(null);
  const { cacheValue } = useQuery<{ movies: Query['movies'] }>({
    query: moviesQuery,
    token,
    variables: { title: titleMatch },
  });
  const onSearchInputChange = React.useCallback(
    throttle(
      ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
        setTitleMatch(value),
      250
    ),
    []
  );
  React.useEffect(() => {
    const edges = idx(cacheValue, (_) => _.data.movies.edges);
    if (edges) {
      const fetchedMovies = edges.map(({ node }) => node);
      setMovies((prevMovies) => (prevMovies || []).concat(fetchedMovies));
    }
  }, [cacheValue]);
  return (
    <>
      <Header onSearchInputChange={onSearchInputChange} />
      <PageContainer>
        <div className="grid">
          {movies && movies.map(({ id }) => <Poster key={id} />)}
        </div>
      </PageContainer>
      <style jsx>
        {`
          .grid {
            display: grid;
            grid-gap: ${spacing.large};
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        `}
      </style>
    </>
  );
}
