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
    languange: string;
}

export type RepositoryResult = {
    totalCount: number
    incompleteResults: boolean,
    items: Array<Repository>
}