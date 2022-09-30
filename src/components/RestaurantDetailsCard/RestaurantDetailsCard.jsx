import React, { useContext, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
import SelectUnits from "../SelectUnits/SelectUnits"
import {ButtonAdd, ButtonRemove, ContainerProductsRestaurant} from "./styled"


function RestaurantDetailsCard({product, handleAddProduct, handleRemoveProduct}) {
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
          {visibleAmount(product) && <p>{quantityProduct(product)}</p>}
          <h4>{name}</h4>
          
          <span>{description}</span>
          
          <div>
            <span>{price.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}</span>
          </div>

          {visibleAmount(product) ?
            <ButtonRemove onClick={() => handleRemove(product)}>remover</ButtonRemove>
            :
            <ButtonAdd onClick={() => handleAdd(product)}>adicionar</ButtonAdd>
          }
        </section>
      </ContainerProductsRestaurant>
    </>
  )
}

export default RestaurantDetailsCard