// <-----------------------API Link ------------------------------->
let url = "http://universities.hipolabs.com/search?name="

// <------------------------Query Selectors------------------------->
let btn = document.querySelector("button")
let para = document.querySelector("p")

// <--------------------Event Listeners on QS ---------------------->

btn.addEventListener('click', async ()=>{
    let countryName = document.querySelector("input").value
    let colarray = await getColleges(countryName);
    show(colarray);
})

function show(colarray){
    let list = document.querySelector("#list")
    list.innerText = "";
    for(col of colarray){
        console.log(col.name);
        let li = document.createElement("li")
        li.innerText = col.name
        list.appendChild(li)
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error:", e)
    }
}
