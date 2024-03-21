import Menu from "./components/Menu"
import Slider from "react-slick";
import {Card} from "./components/Card";
import style from "./Carrousel.module.css"

export const Carrousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
      };

    return(
        <>
        <Menu/>
            <h1>Slider Exemplo</h1>
    <Slider {...settings} >
        <div>
            <div className={style.sectionSlider}>
            <Card 
                name="Ola"
                desc="Delzida"
                value="vai dar certo"
                image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
            <div className={style.sectionSlider}>
            <Card 
                name="Ola"
                desc="Delzida"
                value="vai dar certo"
                image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
            <div className={style.sectionSlider}>
            <Card 
                name="Thhau"
                desc="Delzida"
                value="vai dar certo"
                image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
          <div className={style.sectionSlider}>
            <Card 
                name="SIm"
                desc="Delzida"
                value="vai dar certo"
                image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>
    
    <div>
        <div className={style.sectionSlider}>
        <Card 
            name="Lasquera"
            desc="Delzida"
            value="vai dar certo"
            image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
        />
        </div>
    </div>

    <div>
        <div className={style.sectionSlider}>
        <Card 
            name="Lasquera"
            desc="Delzida"
            value="vai dar certo"
            image="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
        />
        </div>
    </div>
  
    
    </Slider>
        </>
    )
}