import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { api } from '../../../services/api'

const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const getProducts = useCallback(
    async () => {
    try {
      const { data } = await api.get("/products")
      setProducts(data)
      setSuccess("Carregado com sucesso!")
    } catch (error) {
      setError("Erro ao carregar os produtos")
    }
  },[])

  const createProduct = useCallback(
    async ({name, description, price}) => {
      try {
        await api.post("/products", {
          name,
          description,
          price
        })
        await getProducts()
        setSuccess("Criado com sucesso!")
      } catch (error) {
        setError("Erro ao criar o produto")
      }
  },[getProducts])

  const editProduct = useCallback(
    async ({id, name, description, price}) => {
     try {
        await api.post(`/products/${id}`, {
          name,
          description,
          price
        })
        setProducts(pState => pState.map(
          state => state.id === id ? {id, name, description, price} : state
        ))
        setSuccess("Editado com sucesso!")
     } catch (error) {
        setError("Erro ao editar o produto")
     }
  },[])

  const deleteProduct = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/products/${id}`)
        setProducts(pState => pState.filter(
          state => state.id !== id
        ))
        setSuccess("Editado com sucesso!")
      } catch (error) {
        setError("Erro ao deletar o produto")
      }
  },[])
 
  return (
    <ProductContext.Provider 
      value={{ 
        products,
        getProducts,
        createProduct,
        editProduct,
        deleteProduct,
        success, 
        error 
      }}
    >
          {children}
    </ProductContext.Provider>
  );
};

function useProduct() {
  const context = useContext(ProductContext);

  return context;
}

export { ProductProvider, useProduct };