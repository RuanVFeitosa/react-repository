import Header from "./Components/Header"
import Card from "./Components/Card"
import Banner from "./Components/Banner"
import BannerCard from "./Components/bannerCard"
import Form from "./Components/form"
import './app.css'

function App() {

  return (
    <>
     <Header />
     <Banner />
     <Card />
     <BannerCard
      titulo="Banner Principal New"
      subtitulo="Lorem Ipsum New"
     />
     <hr />
     <br />
     <Form />
    </>
  )
}

export default App;
