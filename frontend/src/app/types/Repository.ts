export type Repository = {
    id: number;
    name: string;
    htmlUrl: string;
    owner: {
        avatarUrl: string
        login: string
    };
    description: string;
    watchersCount: number;
    stargazersCount: number;
    language: string;
}

export type RepositoryResult = {
    lastPage: number;
    totalCount: number
    incompleteResults: boolean,
    items: Array<Repository>
}