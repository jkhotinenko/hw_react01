
import { useState, useEffect } from 'react';


function Card(props) {
    const {id} = props;
    const api="https://rickandmortyapi.com/api/character";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch(api+'/'+id)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
           // console.log(item),
            //status,species,gender
            <div className="second">
                <h2>Name:{item.name}</h2>
                <p>ID:{item.id}</p>
                <p>Status:{item.status}</p>
                <p>Species:{item.species}</p>
                <p>Gender:{item.gender}</p>
                <img src={item.image}/>
            </div>

        );
    }


    // fetch(api+'/'+'1')
    //     .then(response => response.json())
    //     .then(ppl=> {
    //
    //
    //     })

}
export default Card;