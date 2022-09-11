import React, {useState, useEffect } from 'react';
import Select from 'react-select';
import {Container, Table} from 'react-bootstrap';

const SelectMenu = () => {
  const [clients, setClients] = useState(undefined);
  const [filteredClients, setFilteredClients] = useState(null);
  const [selectedOption, setSelectedOption] = useState (null);
  const [selectList, setSelectList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api-generator.retool.com/UkTXWT/data`);
      const json = await data.json();
      
      setClients(json);
      setFilteredClients(json);
  
      setSelectListClients(json);
    }
    fetchData()
    .catch(console.err);
  },[]);
  
  useEffect(() => {
    const setFilteredClientsByName = (option) => {
      let selectFilteredClients = [];
      if(clients)
        selectFilteredClients = [...clients];
  
      if(option)
        selectFilteredClients = [...clients?.filter(({name}) => name === option?.label)];
  
      setFilteredClients([...selectFilteredClients]);
    }
    setFilteredClientsByName(selectedOption);
  },[selectedOption, clients]);

  const setSelectListClients = (json) => {
    const selectListClients = json.map(({id, name}) => ({value: id, label: name}));
    setSelectList(selectListClients);
  }

  const handleClientName = (option) => {
    setSelectedOption(option);
  }

  if(!clients){
    return <>loading...</>
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
          value={selectedOption}
          onChange={handleClientName} 
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
              {filteredClients.map(item => {
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
  