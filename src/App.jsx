import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import PhoneBook from "./components/Data/PhoneBook.json"
import { useState, useEffect } from "react";
import css from "./App.module.css"

const getInitialData = () => {
  const savedData = localStorage.getItem('users-data');
  return savedData ? JSON.parse(savedData) : PhoneBook;
}


export default function App() {
  
  const [users, setUsers] = useState(getInitialData)
  const [filter, setFilter] = useState('')
  
  useEffect(()=> {
  const phoneBook = JSON.stringify(users);
    localStorage.setItem("users-data", phoneBook);
  }, [users]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId)
    }) 
  }

    const visibleUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div id={css.root}>
      <h1>
        PhoneBook
      </h1>
      <ContactForm onAdd={addUser}></ContactForm>
    <SearchBox value={filter} onFilter={setFilter}></SearchBox>
      <ContactList contactsList={visibleUsers} onDelete={deleteUser}></ContactList>
    </div>
  )
}