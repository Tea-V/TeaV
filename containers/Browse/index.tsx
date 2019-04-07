import React from 'react';
import idx from 'idx';

import PageContainer from ':components/PageContainer';
import spacing from ':theme/spacing';
import throttle from ':utils/throttle';
import usePaginatedQuery from ':hooks/usePaginatedQuery';
import { Query } from ':types/schema';

import Header from './Header';
import Poster from './Poster';

type BrowseProps = {
  token: string;
};

type MoviesQuery = {
  movies: Query['movies'];
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
  const [titleMatch, setTitleMatch] = React.useState<string | null>(null);
  const { cacheValue } = usePaginatedQuery<MoviesQuery>(
    {
      query: moviesQuery,
      token,
      variables: { title: titleMatch },
    },
    [titleMatch]
  );
  const movies = idx(cacheValue, (_) => _.data.movies.edges);
  const onSearchInputChange = React.useCallback(
    throttle(
      ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
        setTitleMatch(value),
      250
    ),
    []
  );
  return (
    <>
      <Header onSearchInputChange={onSearchInputChange} />
      <PageContainer>
        <div className="grid">
          {movies && movies.map(({ node: { id } }) => <Poster key={id} />)}
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
