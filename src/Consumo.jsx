import { Card } from "./components/Card"
import Menu from "./components/Menu"

import data from "./constants/animais.json"

export const Consumo = () => {
    return(
        <div>
        <Menu/>
        <br />
        Consumo JSON
        {data.map((item) => {
            return(
                <Card
                name={item.name}
                desc={item.desc}
                value={item.value}
                image={item.image}
                key={item.id}
               />
                )
            })}
        </div>
    )
}
