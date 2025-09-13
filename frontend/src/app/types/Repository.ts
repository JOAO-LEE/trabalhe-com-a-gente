export type Repository = {
    id: number;
    name: string;
    owner: {
        avatarUrl: string
        login: string
    };
    updatedAt: string | Date;
    description: string;
    watchersCount: number;
    stargazersCount: number;
    language: string;
    topics: Array<string>;
    htmlUrl: string;
}

export type RepositoryResult = {
    lastPage: number;
    totalCount: number
    incompleteResults: boolean,
    items: Array<Repository>
}