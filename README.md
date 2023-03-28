# Lista-de-Tarefas

O arquivo foi feito com base em duas lógicas principais:

 1- Adiciona Task: 
 
 const addTask = ()=> {
        if (input.trim()) {
            setTaskArray([...taskArray, input]); setInput("");
          setShowInput(false)}};
          
 
 2- Remove Task: 
 
 const removeTask = (index) => {
      const newtaskArray = taskArray.filter((_,i) => i !== index);
      setTaskArray(newtaskArray);
