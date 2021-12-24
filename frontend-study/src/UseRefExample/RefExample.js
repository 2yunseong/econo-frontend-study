import React,{useState, useRef} from "react";

function RefExample(){

    const [student, setStudent] = useState({
        name: '',
        id : ''
    });

    const nameInput = useRef();

    const {name, id} = student;

    const onChange = (e) => {
        const {value, name} = e.target;
        setStudent({
            ...student,
            [name]:value
        });
    }

    const onReset = () => {
        setStudent({
          name: '',
          nickname: '',
        });
        nameInput.current.focus();
      };

    return(
        <div>
            <h1> Ref 사용 </h1>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="id" placeholder="학번" onChange={onChange} value={id} />
            <button onClick={onReset}>초기화</button>
            <div>
                이름 : {name}
                학번 : {id}
            </div>
        </div>
    );
}

export default RefExample;