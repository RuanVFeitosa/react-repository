const Header = () => {
    const headerStyle =  {
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #000'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: 'white'
    }

    return (
    <header style = {headerStyle}>
        <h1 style={titleStyle}><hr /></h1>
    </header>
    )
}


export default Header;

