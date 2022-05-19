import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    const onAdd = () => {
        alert('Compra realizada');
    }

    return (
        <>
            <div>
                <h2>{greeting}</h2>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;