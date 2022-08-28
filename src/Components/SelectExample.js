import React, {useState, useEffect } from 'react';
import Select from 'react-select';
import {Container, Table} from 'react-bootstrap';

const SelectMenu = () => {
  const [client, setClient] = useState(null);
  const [selectedOption, setSelectedOption] = useState (null);
  // const [selectList, setSelectList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api-generator.retool.com/UkTXWT/data`);
      const json = await data.json();
      
      setClient(json);
    }
    
    fetchData()
    .catch(console.err);
    
  },[]);
  
  if(!client){
    return <>loading...</>
  }
  
  const selectList = client.map((item) => {
    return {id: item.id}
  });
  
  const handleClientName = (e) => {
    //Client option selected is coption
    // console.log((e) => (selectedOption[e.target.value]));
    setSelectedOption(selectedOption);
  }
  
  return (
    <>
    <label>
      <h1>Clientes</h1>
    </label>
    <div className='row'>
      <div className='col-sm-3'>
        <Select 
          isClearable
          onChange={(e) => handleClientName(e.target.value)} 
          options={selectList} 
          />
      </div>
    </div>
    <br/>
    <div className='row'>
      <div className='col-sm-9'>
        <Container>
          <Table striped bordered hover size="sm" variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              {client.map(item => {
                  console.log(selectList);
                  //validacion debe ir aqui y manejar los datos de abajo
                  // if(item.id===selectList){
                    return(
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                      </tr>
                    )
                  // }
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  </>
  )  
}

export default SelectMenu;
  