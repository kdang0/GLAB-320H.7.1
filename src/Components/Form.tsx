import React from 'react'
import {useState} from 'react';
import { urlSearch } from '../App.tsx';
interface Form{
    moviesearch: (searchterm : string, url:string) => void
}


export default function Form({moviesearch}: Form) {
  const [formData, setFormData] = useState({
    searchterm: ""
  });
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    moviesearch(formData.searchterm, urlSearch);
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
