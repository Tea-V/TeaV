export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Connection = {
  __typename?: 'Connection';
  pageInfo: PageInfo;
};

export type Edge = {
  __typename?: 'Edge';
  cursor: Scalars['String'];
};

export type Movie = Node & {
  __typename?: 'Movie';
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MoviesConnection = Connection & {
  __typename?: 'MoviesConnection';
  edges: Array<MoviesEdge>;
  pageInfo: PageInfo;
};

export type MoviesEdge = Edge & {
  __typename?: 'MoviesEdge';
  cursor: Scalars['String'];
  node: Movie;
};

export type Node = {
  __typename?: 'Node';
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  movie?: Maybe<Movie>;
  movies: MoviesConnection;
};

export type QueryMovieArgs = {
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
};

export type QueryMoviesArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  titleMatch?: Maybe<Scalars['String']>;
};
