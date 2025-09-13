import { CustomError } from "../../Error/Error";
import { camecalize } from "../../utils/camecalize";
import type { RepositoryResult } from "../../interface/Repository";
import { extractLastPageNumber } from "../../utils/extractLastPageNumber";

export const getRepoBySearchParamService = async (searchParam: string, page: string = "1") => {
    const githubApiUrl = `https://api.github.com/search/repositories?q=${searchParam}&per_page=10&page=${page}`;

    const response = await fetch(githubApiUrl, {
        headers: {
            Accept: 'application/vnd.github+json',
        }
    });

    const pagination = response.headers.get("link");
    const lastPage = extractLastPageNumber(pagination);
    const result = await response.json();

    if (`errors` in result) {
        throw new CustomError("Search requires at least one character", 422);
    }

    const repositoriesList = camecalize<RepositoryResult>(result);

    if (!repositoriesList.totalCount || !repositoriesList.items) {
        throw new CustomError("No results were found matching this term.", 404);
    }

    return { lastPage, ...repositoriesList };

}