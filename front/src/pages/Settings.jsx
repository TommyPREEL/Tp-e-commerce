import React, { useEffect, useState }from 'react';
import { useNavigate } from'react-router-dom';

function Settings() {

    const navigate = useNavigate();

    const [backendData, setBackendData] = useState({});
    const [newData, setNewData] = useState({});

    useEffect(() =>{
        fetch(`/users/details/${JSON.parse(localStorage.getItem('user')).id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(dataBack => {
            setBackendData(dataBack);
            setNewData(dataBack);
          })
          .catch(error => {
            console.error(error);
          });

    }, [])

    function handleClickConfirm(){
        fetch(`/users/update/${backendData.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
          })
          .then(response => response.json())
          .then(dataBack => {
            localStorage.setItem('user', JSON.stringify(newData));
            navigate('/users/settings', { state : { message : `Updated profile !`} } );
          })
          .catch(error => {
            console.error(error);
          });
    }

    function handleOnChange(e){
        setNewData({
            ...newData,
            [e.target.name]:e.target.value
        })
        console.log(newData);

    }
  return (
    <div>
      <p>Bie</p>
      <input type="text" name="firstname" defaultValue={backendData.firstname} onChange={(event) => handleOnChange(event)}></input>
      <input type="text" name="lastname" defaultValue={backendData.lastname} onChange={(event) => handleOnChange(event)}></input>
      <input type="text" name="address" defaultValue={backendData.address} onChange={(event) => handleOnChange(event)}></input>
      <input type="text" name="password" defaultValue={backendData.password} onChange={(event) => handleOnChange(event)}></input>
      <button onClick={handleClickConfirm}>Confirmation modif</button>
    </div>
  );
}
export default Settings;