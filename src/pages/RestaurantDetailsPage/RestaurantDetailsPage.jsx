import React, { useContext, useEffect } from "react"
import { Header } from "../../components/Header/Header"
import {RestaurantDetailsCard} from "../../components/RestaurantDetailsCard/RestaurantDetailsCard"
import {ContainerDetailsRestaurants, Image} from "./style"
import { BASE_URL } from "../../constants/constants"
import {useRequestData} from "../../hooks/useRequestData"
import { useParams } from "react-router-dom"
import { Loading } from "../../components/Loading/Loading"
import {GlobalContext} from "../../context/GlobalContext"
import {useProtectedPage} from "../../hooks/useProtectedPage"


export function RestaurantDetailsPage() {

  useProtectedPage()

  const { restauranteId } = useParams()
  const {arrayProducts, setArrayProducts} = useContext(GlobalContext)
  const [data, error, isLoading] = useRequestData(`${BASE_URL}/restaurants/${restauranteId}`, localStorage.getItem("token"))
  let categories = []

  useEffect(() => {
    let productsInCart = JSON.parse(localStorage.getItem("ProductCart"))
    {productsInCart && setArrayProducts(productsInCart)}
  }, [])

  const handleAddProduct = (product, quantity) => {
    const newCart = [...arrayProducts]
    newCart.push({ ...product, quantity: quantity, restaurantId: restauranteId, restaurant: data.restaurant.name, address: data.restaurant.address, time: data.restaurant.deliveryTime, shipping: data.restaurant.shipping });
    setArrayProducts(newCart)
  }

  const handleRemoveProduct = (product) => {
    const indexProduct = arrayProducts.findIndex(
      (item) => item.id === product.id
    )
    const newCard = [...arrayProducts]
    newCard.splice(indexProduct, 1)
    setArrayProducts(newCard)
  }

  const listCategories = () => {
    if (data) {
      let equal
      for (let i = 0; i < data.restaurant.products.length; i++) {
        if (i === 0) {
          categories.push(data.restaurant.products[0].category)
        } else {
          for(let c = 0; c < categories.length; c++) {
            if(data.restaurant.products[i].category !== categories[c]) {
              equal = false
            } else {
              equal = true
              break
            }
          }
          !equal && categories.push(data.restaurant.products[i].category)
        }
      }
    }
  }

  const renderData = () => {
    listCategories()
    let result = []
    for (let i = 0; i < categories.length; i++) {
      let productsByCategory = data.restaurant.products.filter(product => product.category === categories[i])
      
      result.push(
      <div key={categories[i]}>
        <h5>{categories[i]}</h5>
        {productsByCategory.map(item => {
        return <RestaurantDetailsCard key={item.id} product={item} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>})}
      </div>)
    }
    return result
  }

  return (
    <>
      <Header showArrow={"true"} showTitle={"true"} title={"Restaurante"}/>
      {isLoading && <Loading/>}
      
      {data && (
        <ContainerDetailsRestaurants>
          <Image src={data.restaurant.logoUrl} alt="Logo Restaurante"/>
         
          <div>
            <h4>{data.restaurant.name}</h4>
            <h6>{data.restaurant.category}</h6>
            <p>{data.restaurant.deliveryTime} min</p>
            <p>
              Frete{" "}
              {data.restaurant.shipping.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>{data.restaurant.address}</p>
            
            {renderData()}
          </div>
        </ContainerDetailsRestaurants>
      )}
    </>
  )
}
