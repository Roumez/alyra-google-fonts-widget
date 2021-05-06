const Footer = ({darkMode}) => {
  return (
    <footer className={darkMode ?"p-3 text-center bg-warning text-dark" :"p-3 text-center bg-dark text-white"}>With Love &amp; React for Alyra</footer>
  )
}

export default Footer