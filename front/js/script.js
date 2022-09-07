let url ='http://localhost:3000/api/products' ;


    fetch(url)
        .then((response) => response.json()
        .then((data) => {
            console.log(data);
                data.forEach(element => {
                    const parent=document.createElement('a');
                        parent.href=`product.html?id=${element._id}`;
                            parent.innerHTML = ` 
                                <article>
                                    <img src="${element.imageUrl}" alt="${element.altTxt}"/>
                                    <h3 class="productName">${element.name}</h3>
                                    <p class="productDescription">${element.description}</p>
                                </article>`;
                            document.getElementById("items").appendChild(parent);
                });
            })
    );

    