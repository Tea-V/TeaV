import React from 'react';

import spacing from ':theme/spacing';
import useQuery from ':hooks/useQuery';

import Header from './Header';
import Poster from './Poster';

type BrowseProps = {
  token: string;
};

const moviesQuery = `
query {
  movies {
    edges {
      node {
        title
      }
    }
  }
}
`;

export default ({ token }: BrowseProps) => {
  const { cacheValue } = useQuery(moviesQuery, token);
  return (
    <>
      <Header />
      <div className="container">
        <div className="grid">
          {!cacheValue || !cacheValue.data
            ? null
            : cacheValue.data.movies.edges.map(
                ({ node: { title } }: { node: { title: string } }) => (
                  <Poster key={title} />
                )
              )}
        </div>
        <style jsx>{`
          .container {
            padding: 0 ${spacing.large} ${spacing.large};
            width: 100%;
          }

          .grid {
            display: grid;
            grid-gap: ${spacing.large};
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        `}</style>
      </div>
    </>
  );
};
