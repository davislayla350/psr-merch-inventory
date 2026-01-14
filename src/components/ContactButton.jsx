function ContactButton({ itemName }) {
  const email = "davislayla350@gmail.com"
  return (
    <a
      href={`mailto:${email}?subject=Merch Inquiry: ${itemName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Contact</button>
    </a>
  )
}

export default ContactButton
