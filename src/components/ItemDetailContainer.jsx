import { useParams } from "react-router-dom";

const items = [
{id: 1, nombre:"1/4 Kilo de Helado", precio: 3000, imagen: "https://saintmoritz.com.ar/wp-content/uploads/2020/08/helados-saint-mortiz-mediokg-1-1.png", cantidad: 2, categoria: "Helados"},
{id: 2, nombre: "1/2 Kilo de Helado", precio: 5900, imagen: "https://alem.heladosheggel.com/wp-content/uploads/2018/11/453858-94cf7cc8-9271-4a94-9e22-6ee6e6a2571e.jpg", cantidad:  3, categoria: "Helados"},
{id: 3, nombre: "Un Kilo de Helado", precio: 11500, imagen: "https://bienvenidos.dolcesalato.com.pe/wp-content/uploads/2020/04/njnn.jpg", cantidad: 1, categoria: "Postres"},
{id: 4, nombre: "Torta de Frutilla", precio: 18000, imagen: "https://saintmoritz.com.ar/wp-content/uploads/2020/08/helados-saint-mortiz-mediokg-1-1.png", cantidad: 2, categoria: "Postre"},
{id: 5, nombre: "Almendrado", precio: 15000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmHW9IVVvqvBeu5LBDIfKzo4tCIjXU5wFvE-BYoJJBw&s", cantidad: 1, categoria: "Postres"},
{id: 6, nombre: "Bombón Escoses", precio: 3500, imagen: "https://lh6.googleusercontent.com/proxy/ugZo81ie7zpUEdkVKaF6pr8DDZeP3_0vS9pjruvD4g9JLe-bKeUllaZwEHKd0p8BL0S5g8ffboYuZycjvO-ScfAXl71vXCji4ffM-_PO1WS9DTz_Nqe8MXi5", cantidad: 1, categoria: "Postres"},
];

function ItemDetailContainer() {
    const { id } = useParams()

    const product = items.map((item,i)=>{
        return {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            imagen: item.imagen,
            cantidad: item.cantidad,
            categoria: item.categoria,
        }
    })

    const producto = product.find (producto => product.id === id);

    return (
        <p>Disfrutá de este riquisimo {producto}</p>
        
    )
}


export default ItemDetailContainer