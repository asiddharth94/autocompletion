const userSearch = document.querySelector(".autocomp__search");
const searchResultList = document.querySelector(".autocomp__search-results");

const createSearchResultItems = (searchResultItems) => {
    let resultItems = '';
    for(let i=0; i<searchResultItems.length; i++) {
        resultItems += `<li>${searchResultItems[i].name}</li>`
    }
    return resultItems;
}

userSearch.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    if(searchValue) {
        fetch("./data.json")
            .then(fetchRes => fetchRes.json())
            .then(searchResult => {
                const filteredSearchData = searchResult.filter(searchResultItem => {
                    return searchResultItem["name"].startsWith(searchValue);
                });
                const searchResultListItems = createSearchResultItems(filteredSearchData);
                searchResultList.innerHTML = searchResultListItems;
            })
            .catch("Unable to fetch data");
    }
})