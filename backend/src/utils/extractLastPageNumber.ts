export function extractLastPageNumber(linkHeader: string | null): number {
    if (!linkHeader) return 1;
    const links = linkHeader.split(",");

    const lastPageLink = links.find((link) => link.includes('rel="last"'));
    if (!lastPageLink) return 1;
    const linkSplit = lastPageLink.split("page=")
    const lastItem = linkSplit.slice(linkSplit.length - 1);
    const numberOfPages = +lastItem[0].split(">;")[0]
    return numberOfPages
}