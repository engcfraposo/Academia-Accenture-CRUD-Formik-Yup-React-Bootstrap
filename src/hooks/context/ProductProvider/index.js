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
        } catch (error) {
            setError("Error ao adquirir a lista e produtos")
        }
    }, 
[])

const postProduct = useCallback(
    async ({name, description, price}) => {
        try {
            await api.post("/products", {
                name,
                description,
                price,
            })
        } catch (error) {
            setError("Error ao postar um produto")
        }
    },
[])

const putProduct = useCallback(
    async ({id, name, description, price}) => {
        try {
            await api.put(`/products/${id}`, {
                name,
                description,
                price
            })
        } catch (error) {
            setError("Error ao editar o produto")
        }
    },
[])

const deleteProduct = useCallback(
    async ({id}) => {
        try {
            await api.delete(`/products/${id}`)
        } catch (error) {
            setError("Error ao deletar o produto")
        }
    },
[])
 
  return (
    <ProductContext.Provider 
      value={{ 
        products,
        getProducts,
        postProduct,
        putProduct,
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