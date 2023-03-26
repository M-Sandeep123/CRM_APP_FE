import { Button } from "@mui/material";
import { useMemo } from "react";
import { useState } from "react"


 function Test() {
    const [count,setCount] = useState(0);
    const [todo,setTodo] = useState([]);
    const calc = useMemo(()=>{
        veryLongCal(count);
    },[count]);

    const addtodo =()=>{
        setTodo((t)=>[...t,"New Todo"]);
    }

    const increment = ()=>{
        setCount((c)=>c+1);
    }



    return(
        <div>
            <div>
                <h2>To Do's</h2>
                {todo.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}

                <div>
                    <Button onClick={addtodo}>add todo</Button>
                </div>
                <hr/>
                Count: {count}
                <Button onClick={increment}>+</Button>
                {calc}
            </div>
        </div>
    )


}

const veryLongCal = (num)=>{
    for(let i=0; i<1000000000;i++){
        num+=1;
    }

    return num;
}

export default Test;