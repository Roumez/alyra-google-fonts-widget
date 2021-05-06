const Header = ({darkMode}) => {
  return (
    <header className= {darkMode ? " p-5 bg-warning text-dark text-center":"p-5 bg-danger text-white text-center "}>
      <h1 className="display-1">Quoi de neuf, Google Fonts™&nbsp;?</h1>
      <p className="h4">Le plus récentes, les plus <i>trendy</i> et les plus populaires polices Google.</p>
    </header>
  )
}

export default Header