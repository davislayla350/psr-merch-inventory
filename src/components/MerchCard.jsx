function MerchCard({ name, description, sizes, quantity, imageUrl }) {
  return (
    <div className="merch-card">
      <img src={imageUrl} alt={name} width="200" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Sizes: {sizes.join(", ")}</p>
      <p>{quantity > 0 ? `${quantity} in stock` : "Out of stock"}</p>
    </div>
  )
}

export default MerchCard
