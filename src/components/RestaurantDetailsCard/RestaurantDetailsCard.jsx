import React, { useContext, useState } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import {SelectUnits} from "../SelectUnits/SelectUnits"
import {ContainerProductsRestaurant, Button} from "./style"


export function RestaurantDetailsCard({product, handleAddProduct, handleRemoveProduct}) {
  const {arrayProducts} = useContext(GlobalContext)
  const { photoUrl, name, description, price } = product
  const [showUnits, setShowUnits] = useState(false)
  
  const handleAdd = () => {
    setShowUnits(true)
  }

  const handleRemove = (product) => {
    setShowUnits(false)
    handleRemoveProduct(product)
  }

  const quantityProduct = (product) => {
    const indexProduct = arrayProducts && arrayProducts.findIndex((item) => item.id === product.id)
    return arrayProducts[indexProduct].quantity
  }

  const visibleAmount = (product) => {
    let condition
    const indexProduct = arrayProducts && arrayProducts.findIndex((item) => item.id === product.id)
    if (indexProduct === -1) {
      condition = false
    } else {
      condition = true
    }
    localStorage.setItem("ProductCart", JSON.stringify(arrayProducts))
    return condition
  }

  return (
    <>
      {showUnits && (
        <SelectUnits
          showUnits = {showUnits}
          setShowUnits = {setShowUnits}
          handleAddProduct = {handleAddProduct}
          product = {product}
          arrayProducts = {arrayProducts}
        />
      )}

      <ContainerProductsRestaurant>
        <img src={photoUrl} alt="Imagem do restaurante"/>
        
        <section>
          <div>
            <h4>{name}</h4>
            {visibleAmount(product) && <span>{quantityProduct(product)}</span>}
          </div>

          <p>{description}</p>

          <div>
            <p>{price.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}</p>
            {visibleAmount(product) ?
              <Button color={'#e02020'} onClick={() => handleRemove(product)}>remover</Button>
              :
              <Button color={'#5cb646'} onClick={() => handleAdd(product)}>adicionar</Button>
            }
          </div>
        </section>
      </ContainerProductsRestaurant>
    </>
  )
}
