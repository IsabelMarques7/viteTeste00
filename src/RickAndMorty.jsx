import { useState } from "react"
import { Card } from "./components/Card"
import Menu from "./components/Menu"
 import { apiRMCharacters } from "./api/server"
 import { useEffect } from "react"

export const RickAndMorty = () => {
const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("")

    useEffect(()=> {
        apiRMCharacters.get(`/character/?page=${searchName}&name=${searchName}`).then((response) => {
            if(!response.data.results){
                console.log("array vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                console.log("esta pagina não contem esse personagem")
            }
            if(error.response.status === 500){
                console.log("erro de conexão com servidor")
            }
            console.error(error)
        })
    }, [page, searchName])
    return(
        <div>
            <Menu/>
            <h1>Rick And Morty API</h1>

            <input 
                type="text" placeholder="digite uma pagina" 
                value={page}
                onChange={(event) => setPage(event.target.value)}
             />
             <br />
              <input 
                type="text" placeholder="digite um nome" 
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
             />
             <br />
             <section>
               {data.map((character) => {
                return(
                    <>
                    <Card
                    name={character.name} 
                    desc={character.species}
                    value={character.status}
                    image={character.image}
                    // key={character.id}
                /> 
                <div>
                    {character.status === "Alive" 
                    ? <div style={{background: "green", width: "100px"}}>vivo</div> 
                    : character.status === "Dead" 
                    ? <div style={{background: "red", width: "100px"}}>morto</div> 
                    : <div style={{background: "grey", width: "100px"}}>desconhecido</div>}
                </div>
                </>
                )
            })}
             </section>
        </div>
    )
}