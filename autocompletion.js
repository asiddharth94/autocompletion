const userSearch = document.querySelector(".autocomp__search");

const fetchData = async () => {
    try {
        const response = await fetch("./data.json");
        const searchList = await response.json();
        return searchList;
    } catch (error) {
        console.error("Unable to fetch results");
    }
}

const getSearchResults = async (queryParam) => {
    const searchList = await fetchData();
    const filteredSearch = searchList.filter(searchListItem => {
        return searchListItem["name"].startsWith(queryParam);
    });
}

userSearch.addEventListener("keyup", (event) => {
    getSearchResults(event.target.value);
})