import React, { useState, useEffect } from "react";

function UserTable() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    
    const fetchUsers = async()=>{
      const res = await fetch ("https://jsonplaceholder.typicode.com/users")
      const data = await res .json();
      setUsers(data.sort((a,b)=>{
        a.id-b.id));
      };
     fetchUsers();
               },[]);
    return {
      <table>
      <thead>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Website</th>
      </tr>
      </thead>
      <tbody>
      {user.map((user)=>{
        <tr key = {user.id}>
          <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        </tr>
      ))}
      </tbody>
            </table>
    )
}


export default UserTable;
