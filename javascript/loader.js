let count_item = 0

function loaDer(page,...date) {
    let urlresponse = `${date[0]}&page=${page}`
    console.log(urlresponse);
    page_number = page
    fetch(urlresponse)
    .then(response => response.json())
    .then(data => {
        if (!date[1]) {
            appendDiv.innerHTML = ''; 
        }
        data.results.forEach(obj => {
            let {
                backdrop_path: img, 
                id, 
                original_title: name, 
                release_date,  
                vote_average: reyting,
                overview: alter_img 
            } = obj;
            
            if (searchValidaed(searchInput.value, name) && 
                minValidaed(minInput.value, parseInt(release_date.slice(0,4))) && 
                maxValidaed(maxInput.value, parseInt(release_date.slice(0,4))) && 
                scoreValidaed(`${scoreInput.value}`, parseFloat(reyting))) {

                    count_item++
                    console.log(name,release_date);
                    let movieDiv = tagCreater('div','movie') 

                 let img_src = imgTag(`https://image.tmdb.org/t/p/w500/${img}`, alter_img)
                 let div_info = tagCreater('div','movie-info')
                 let  h3 = h1_creater(name) // Film nomi
                 let span_reyting = tagCreater('span','orange',reyting)
                 let span_date = tagCreater('span','date',release_date)

                 div_info.append(h3)
                 div_info.append(span_reyting)
                 movieDiv.append(img_src)
                 movieDiv.append(div_info)            
                 movieDiv.append(span_date)
                 appendDiv.append(movieDiv)
                 sahigfa.textContent = page_number
                filter = [ searchInput.value, minInput.value, maxInput.value, scoreInput.value ]
                try {
                    lokalwriter('header_page',header_page)
                    lokalwriter('page',page)
                    lokalwriter('filter',filter)
                } catch (error) {
                    console.log(`Xatolik Lokal storageda ${error}`);
                }
            }

        });
        
    }).catch(error => console.log(error));
    return count_item
}

;(
    setTimeout(() =>{
        filter = lokalreader('filter') || [  searchInput.value, minInput.value, maxInput.value, scoreInput.value ];
        page_number = lokalreader('page') || 1
        header_page = lokalreader('header_page') || tokenTop
        sahigfa.value = page_number
        searchInput.value = filter[0]
        minInput.value = filter[1]
        maxInput.value = filter[2]
        scoreInput.value = filter[3]
        loaDer(page_number, header_page)

   },500)
)();