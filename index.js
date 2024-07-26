
const MONEY = 35

const comidas = [
    {name:'Tacos',price:12},
    {name:'Tamales',price:13},
    {name:'Tortas',price:14},
    {name:'Enchiladas',price:15},
    {name:'Camarones',price:16},
    {name:'Pulpo',price:17},
    {name:'Arroz',price:18},
]

const bebidas = [
    {name:'Coca',price:5},
    {name:'Pepsi',price:6},
    {name:'Naranjada',price:7},
    {name:'Agua',price:8},
    {name:'Pozol',price:9},
]


// Si sabemos que las comidas y bebidas estan ordenados podemos realizar lo siguiente


const ordenados  = () => {
    let selecciones = []

    let invertidoComidas = comidas.reverse()
    let invertidoBebidas = bebidas.reverse()


    for(let cm of invertidoComidas){

        let check = false
        
        for(let be of invertidoBebidas){

            if(!check){

                if((cm.price+be.price) <= MONEY ) {
                    selecciones.push([cm.name,be.name])
                    check=true
                }

            }else{
                selecciones.push([cm.name,be.name])
            }

        }

    }

    console.log(selecciones)

}



// si ninguna esta ordenado solo se me ocurre hacer lo siguiente

const notOrdenados = () => {
    
    let selecciones = []
    
    for(let cm of comidas){
           
        for(let be of bebidas){          
            if((cm.price+be.price) <= MONEY ) {
                selecciones.push([cm.name,be.name])            
            }          
        }

    }

    console.log(selecciones.length)


}


ordenados()
notOrdenados()