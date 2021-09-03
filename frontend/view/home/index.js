// Affichage et interaction sur page d'acceuil

 let url = `http://localhost:3000/api/cameras`;

 fetch(url).then( response =>
    response.json())
    .then(jsonListCamera => {
        for (let jsonCamera of jsonListCamera) {
            let camera = new Camera(jsonCamera);
            document.querySelector(".articles__container").innerHTML += `<div class="article__card">
                                                                    <div class="article__card-info">
                                                                        <img src='${camera.imageUrl}' class="article__card-img"/>                                                                  
                                                                        <h3 id="name">${camera.name}</h3>
                                                                        <p id="description">Description : ${camera.description}</p>
                                                                        <p id="price">${camera.price} €</p>
                                                                    </div>
                                                                    <div class="personnalisation">
                                                                        <div class="lenses">
                                                                            <label for="lenses">Personnalisez avec nos lentilles :</label>
                                                                            <select name="lentilles" id"lenses">
                                                                                <option value="valeur1"selected>${camera.lenses[0]}</option>
                                                                                <option value="valeur2">${camera.lenses[1]}</option>
                                                                                <option value="valeur3">${camera.lenses[2]}</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
        }
        
    
    });


