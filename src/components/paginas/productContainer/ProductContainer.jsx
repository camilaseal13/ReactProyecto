import { Items } from "../../common/items/Items";

const ProductContainer = () => {
  return (
    <div>
      <h2>Lista de productos</h2>
      <Items titulo="titulo 1" precio="precio 1" descripcion="descripcion 1" />

      <Items titulo="titulo 2" precio="precio 2" descripcion="descripcion 2" />

      <Items titulo="titulo 3" precio="precio 3" descripcion="descripcion 3" />
    </div>
  );
};

export default ProductContainer;
