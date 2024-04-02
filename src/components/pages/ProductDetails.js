import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const params = useParams()

    let productData = null

    //database example
    if (params.id === '42') {
        productData = {
            name: 'Healing-Pack',
            cost: '50 gold',
            image: require('./../../assets/imgs/kit-1.png')
        }
    }

    if (params.id === '43') {
        productData = {
            name: 'Equipment-Pack',
            cost: '100 gold',
            image: require('./../../assets/imgs/kit-2.png')
        }
    }

    return (
        <>
            <h1>Product Details</h1>
            <p>Product ID is: {params.id}</p>
            {
                productData != null ?
                <>
                    <img src={productData.image} alt={productData.name} width="200px" />
                    <h2>{productData.name} - ${productData.cost}</h2>
                </>
                : ''
            }
        </>
    )
}