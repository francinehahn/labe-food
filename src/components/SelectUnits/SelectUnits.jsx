import React from "react"
import { Container } from "./style"
import { useForm } from "../../hooks/useForm"


export function SelectUnits ({setShowUnits, handleAddProduct, product, id = "modal"}) {
  const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const [form, onChange] = useForm({quantity: ""})

  const handleRemoveProducts = (e) => {
    (e.target.id === id) && setShowUnits(false)
  }

  const handleQuantity = (e) => {
    e.preventDefault()
    setShowUnits(false)
    {form.quantity > 0 && handleAddProduct(product, form.quantity)}
  }

  return (
    <Container>
      <div onClick={handleRemoveProducts}>
        <p>Selecione a quantidade desejada </p>
        <form onSubmit={handleQuantity}>
          <select id="quantity" name="quantity" value={form.quantity} onChange={onChange}>
            <option>0</option>
            {units.map((num, index) => {
              return <option key={index} value={num}>{num}</option>
            })}
          </select>
          <button>ADICIONAR AO CARRINHO</button>
        </form>
      </div>
    </Container>
  )
}