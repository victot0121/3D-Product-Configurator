import { useState } from "react"
import data from "./data"

const Accordian = () => {

    const [seleted, setSeleted] = useState(null)

    const toggleHandle = (id) =>{
       setSeleted(id)
    }


    return (
        <div style={{width: "100%", height: "100vh", color: "white", backgroundColor: "black"}}>
            <p>Accordian</p>
            <div>
                {data && data.length > 0 ? (
                    data.map((datas) => (
                        <span key={datas.id} onClick={()=>toggleHandle(datas.id)} style={{cursor: "pointer"}}>
                            <p>{datas.question}</p>
                            <div>
                                {
                                    datas.id === seleted ? (
                                       <>
                                        <p>{datas.answer}</p>
                                       </>
                                    ): null
                                }
                            </div>
                        </span>
                    ))
                ) : (
                    <div>
                        <p> No Data ...... </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Accordian

