import MerchGrid from "../components/MerchGrid"

function Home() {
  const merchList = [
    {
      id: 1,
      name: "PSR Hoodie",
      description: "Black hoodie with embroidered letters",
      sizes: ["S", "M", "L"],
      quantity: 5,
      imageUrl: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "PSR T-Shirt",
      description: "White t-shirt with logo",
      sizes: ["S", "M", "L", "XL"],
      quantity: 10,
      imageUrl: "https://via.placeholder.com/200"
    }
  ]

  return (
    <div>
      <h1>Phi Sigma Rho Merch Closet</h1>
      <p>Browse available merchandise and contact for pickup.</p>
      <MerchGrid merchList={merchList} />
    </div>
  )
}

export default Home
