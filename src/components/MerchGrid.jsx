import MerchCard from "./MerchCard"

function MerchGrid({ merchList }) {
  return (
    <div className="merch-grid">
      {merchList.map((item) => (
        <MerchCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default MerchGrid
