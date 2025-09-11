import { CustomError } from "../../Error/Error.ts";
import { camecalize } from "../../utils/camecalize.ts";
import type { RepositoryResult } from "../../interface/Repository.ts";

export const getRepoBySearchParamService = async (searchParam: string): Promise<RepositoryResult | void> => {
    const githubApiUrl = `https://api.github.com/search/repositories?q=${searchParam}`;

    const response = await fetch(githubApiUrl);
    const result = await response.json();

    if (`errors` in result) {
        throw new CustomError("Search requires at least one character", 422);
    }

    const repositoriesList = camecalize<RepositoryResult>(result);

    if (!repositoriesList.totalCount || !repositoriesList.items) {
        throw new CustomError("No results were found matching this term.", 404);
    }

    return repositoriesList;

}