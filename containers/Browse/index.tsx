import React from 'react';

import PageContainer from ':components/PageContainer';
import spacing from ':theme/spacing';
import useQuery from ':hooks/useQuery';
import { Query } from ':types/schema';

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
  const { cacheValue = {} } = useQuery<{ movies: Query['movies'] }>({
    query: moviesQuery,
    token,
  });
  return (
    <>
      <Header />
      <PageContainer>
        <div className="grid">
          {cacheValue.data &&
            cacheValue.data.movies.edges.map(({ node: { id, title } }) => (
              <Poster key={id} />
            ))}
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
