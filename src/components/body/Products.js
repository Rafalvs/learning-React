export default function Products() {
    return (
        <ul className="productBox">
            <li>
                <a href="/product/42" className="productLink"><img className="productImage" src={require('./../../assets/imgs/kit-1.png')} alt="imagem1" /></a>
                <br /><a href="/product/42" className="productLink">product1</a>
            </li>
            <li>
            <a href="/product/43" className="productLink"><img className="productImage" src={require('./../../assets/imgs/kit-2.png')} alt="imagem2"></img></a>
                <br /><a href="/product/43" className="productLink">product2</a>
            </li>
        </ul>
    )
}