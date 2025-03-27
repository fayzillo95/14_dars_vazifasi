
function tagCreater(tag_name, class_name, value = undefined) {
    let res = document.createElement(tag_name)
    res.classList = class_name
    if(value) res.textContent = value
    return res
}
function imgTag(url,alter) {
    let img = document.createElement('img')
    img.src = url
    img.alt = alter
    return img
}
function h1_creater(name) {
    let h1 = document.createElement('h1')
    h1.textContent = name
    return h1
}

function searchValidaed(inputSearch = "", title = "") {
    
    if (inputSearch.trim().length == 0 ) {
        return true
    }else{
        if(title.toUpperCase().includes(inputSearch.trim().toUpperCase())){
            console.log(inputSearch,title);
            return true
        }else{
            return false
        }
    } 
}
 
function minValidaed(inputMin = "", date = 1) {
    
    if (inputMin.trim().length == 0 ) {
        return true
    }else{
        if(parseInt(inputMin) <= date){
            console.log(inputMin, date);
            return true
        }else{
            return false
        }
    } 
}
function maxValidaed(inputMin = "", date = 1) {
    
    if (inputMin.trim().length == 0 ) {
        return true
    }else{
        if(parseInt(inputMin) >= date){
            console.log(inputMin, date);
            return true
        }else{
            return false
        }
    } 
}


function scoreValidaed(inputMin = "", date = 1) {
    
    if (inputMin.trim().length == 0 ) {
        return true
    }else{
        if(parseFloat(inputMin) <= parseFloat(date)){
            console.log(inputMin, date);
            return true
        }else{
            return false
        }
    } 
}

function allSeach() {
    let stop = 0
    appendDiv.innerHTML = ''; 
    page_number = 1
    while (loaDer(page_number, header_page,true) < 20 && stop < 20) {
        page_number+=1
        loaDer(page_number, header_page,true)
        stop++
    }
    count_item = 0
    window.localStorage.setItem('filter', JSON.stringify(filter));
}