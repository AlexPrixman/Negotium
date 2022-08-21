import React, {useState, useEffect } from 'react';
import Select from 'react-select';
import {Container, Table} from 'react-bootstrap';

const SelectMenu = () => {
  const [client, setClient] = useState(null);
  const [selectedOption, setSelectedOption] = useState (null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api-generator.retool.com/mQnDmU/data');
      const json = await data.json();
      
      setClient(json);
    }
    
    fetchData()
    .catch(console.err);
    
  },[]);

  
  useEffect(() => {
    
  },[])
  
  if(!client){
    return <>loading...</>
  }
  
  const selectList = client.map(item => {
    return {value: item.name, label:item.name}
  });
  console.log(selectList); //En teoria esto deberia desplegarme los objetos JSON o no?
  
  const handleClientName = (e) => {
    //Client option selected is coption
    const coption = e.target;
    console.log((selectedOption[coption.value]));
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
                  //validacion debe ir aqui y manejar los datos de abajo
                  return(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>
                  )
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
  