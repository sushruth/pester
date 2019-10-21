import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type IPackage = {
  readonly __typename?: 'Package',
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
  readonly description?: Maybe<Scalars['String']>,
  readonly score?: Maybe<IScore>,
  readonly searchScore?: Maybe<Scalars['Float']>,
};

export type IQuery = {
  readonly __typename?: 'Query',
  readonly searchPackage?: Maybe<ReadonlyArray<Maybe<IPackage>>>,
};


export type IQuerySearchPackageArgs = {
  query?: Maybe<Scalars['String']>
};

export type IScore = {
  readonly __typename?: 'Score',
  readonly final?: Maybe<Scalars['Float']>,
  readonly detail?: Maybe<IScoreDetail>,
};

export type IScoreDetail = {
  readonly __typename?: 'ScoreDetail',
  readonly quality?: Maybe<Scalars['Float']>,
  readonly popularity?: Maybe<Scalars['Float']>,
  readonly maintenance?: Maybe<Scalars['Float']>,
};


export type ISearchPackageQueryVariables = {
  query: Scalars['String']
};


export type ISearchPackageQuery = (
  { readonly __typename?: 'Query' }
  & { readonly searchPackage: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Package' }
    & Pick<IPackage, 'name' | 'version' | 'description' | 'searchScore'>
    & { readonly score: Maybe<(
      { readonly __typename?: 'Score' }
      & Pick<IScore, 'final'>
      & { readonly detail: Maybe<(
        { readonly __typename?: 'ScoreDetail' }
        & Pick<IScoreDetail, 'quality' | 'popularity' | 'maintenance'>
      )> }
    )> }
  )>>> }
);


export const SearchPackageDocument = gql`
    query SearchPackage($query: String!) {
  searchPackage(query: $query) {
    name
    version
    description
    score {
      final
      detail {
        quality
        popularity
        maintenance
      }
    }
    searchScore
  }
}
    `;

/**
 * __useSearchPackageQuery__
 *
 * To run a query within a React component, call `useSearchPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPackageQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchPackageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ISearchPackageQuery, ISearchPackageQueryVariables>) {
        return ApolloReactHooks.useQuery<ISearchPackageQuery, ISearchPackageQueryVariables>(SearchPackageDocument, baseOptions);
      }
export function useSearchPackageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ISearchPackageQuery, ISearchPackageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ISearchPackageQuery, ISearchPackageQueryVariables>(SearchPackageDocument, baseOptions);
        }
export type SearchPackageQueryHookResult = ReturnType<typeof useSearchPackageQuery>;
export type SearchPackageLazyQueryHookResult = ReturnType<typeof useSearchPackageLazyQuery>;
export type SearchPackageQueryResult = ApolloReactCommon.QueryResult<ISearchPackageQuery, ISearchPackageQueryVariables>;