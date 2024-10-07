import "./bannerCard.css"


const BannerCard = ({titulo, subtitulo}) => {
     return (
        <div className="banner">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
        
     )
}

export default BannerCard;