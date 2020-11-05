

    const loadHome = function(){
    const striveapi = fetch(
        `https://striveschool-api.herokuapp.com/books`
    )
    .then((response)=>response.json())
    
    .then((body)=>{
        console.log(body)

        let row = document.querySelector(".album div.row");
        row.remove()
        let container = document.querySelector(
          "div.album.py-5.bg-light div.container"
        );
        row.remove();
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);
        // let searchinput = document.querySelector("#searchInput")
        // let newbody = [{}]

        // console.log(newbody)

        


        body.forEach(element => {
            let card = document.createElement("div");
            card.classList.add("col-md-4");
            
            card.innerHTML = `<div class="card mb-4 shadow-sm">
                                <img src="${element.img}" alt="" />
                                <div class="card-body">
                                <p class="card-text">
                                    ${element.title}
                                </p>
                                <p class="card-text">
                                ${element.category}
                                </p>
                                <h4>${element.price} $</h4>
                                <div
                                    class="d-flex justify-content-between align-items-center"
                                >
                                    <div class="btn-group">
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                        onclick="addCard(this)"
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                        onclick="skipCard(this)"
                                    >
                                        Skip
                                    </button>
                                    </div>
                                    
                                    <small class="text-muted">${element.asin}</small>
                                </div>
                                </div>
                            </div>`;
            newRow.appendChild(card);  
        });
    })
  

}



myOtherList = function () {
  

        let row = document.querySelector(".album div.row");
        row.remove();
        let container = document.querySelector(
          "div.album.py-5.bg-light div.container"
        );
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);

        anotherlist.forEach(element => {
           
            
            newRow.appendChild(element)
            
              
        });
    }
  



const skipCard = function (e) {
    let card =
      e.parentElement.parentElement.parentElement.parentElement.parentElement;
  
    card.remove();
  };
  
  let anotherlist=[]
  const addCard= function(e){
    let card =
    e.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (card.className.includes("bg-info")) {
        card.classList.remove("bg-info");
      } else {
        card.classList.add("bg-info");
      }
  anotherlist.push(card);       
  }

  console.log(anotherlist)


  

  


