import React from 'react';

import PageContainer from ':components/PageContainer';
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

export default function Browse({ token }: BrowseProps) {
  const { cacheValue = {} } = useQuery(moviesQuery, token);
  return (
    <>
      <Header />
      <PageContainer>
        <div className="grid">
          {cacheValue.data &&
            cacheValue.data.movies.edges.map(
              ({ node: { title } }: { node: { title: string } }) => (
                <Poster key={title} />
              )
            )}
        </div>
      </PageContainer>
      <style jsx>{`
        .grid {
          display: grid;
          grid-gap: ${spacing.large};
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      `}</style>
    </>
  );
}
