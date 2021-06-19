import React, {useState, useEffect}from 'react'
import Axios from 'axios'


const ListRepo = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])
    //https://api.github.com/users/Elciele/repos

    useEffect(()=> {
        const dadosList = async () =>{
            const resposta = await Axios.get('https://api.github.com/users/Elciele/repos')
            const dados = await resposta.data
        
            setRepos(dados)

        } 
        dadosList()       
    },[])
     useEffect(()=>{
         setFiltroRepos(
             repos.filter(repo => {
                 return repo.name.includes(busca)
             })
         )
     },[busca, repos])
    return(
        <>
          <input onChange={e => {setBusca(e.target.value)}} placeholder="Digite um Repo"/>    
          {filtroRepos.map(repo =>(
              <p>{repo.name}</p>
          ))}
        </>
    )
}

export default ListRepo