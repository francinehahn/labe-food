import React, {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";
import {Container} from './style'

export function CartCard({img, name, units, description, price}) {
    const products = JSON.parse(localStorage.getItem("ProductCart"))
    const {reload, setReload} = useContext(GlobalContext)

    const handleRemoveItem = () => {
        const filter = products.filter(product => product.name !== name)
        localStorage.setItem("ProductCart", JSON.stringify(filter))
        setReload(!reload)
    }
    
    return (
        <Container>
            <img src={img} alt={`Imagem do ${name}`}/>
            <section>
                <div>
                    <p>{name}</p>
                    <p>{units}</p>
                </div>

                <span>{description}</span>
                
                <div>
                    <strong>R${price.toFixed(2).toString().replace(".", ",")}</strong>
                    <button onClick={handleRemoveItem}>remover</button>
                </div>
            </section>
        </Container>
    )
}