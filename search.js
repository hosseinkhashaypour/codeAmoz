//search file
export function find() {
    const searchInputs = document.querySelectorAll("#searchInput");
    searchInputs.forEach(searchInput=>{
        searchInput.addEventListener('input' , (e)=>{
            const searchText = e.target.value;
            console.log(searchText);
        })
    })
}

