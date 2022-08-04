import "./App.css";
import React,{useState,useEffect} from 'react'
import View from "./View";


const getDatafromLS=()=>{
  const data =localStorage.getItem('books');
  if(data){
    return JSON.parse(data)
     
  }else{
    return [];
  }

}

export default function App2() {

  const [books,setBooks]=useState(getDatafromLS());


  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [isbn,setIsbn]=useState('');


const handleAddBookSubmit=(e)=>{
  e.preventDefault();
  const book={
    title,
    author,
    isbn
  }
  setBooks([...books,book]);
   
  setTitle('')
  setAuthor('')
  setIsbn('')
}

useEffect(()=>{
  localStorage.setItem('books',JSON.stringify(books));
},[books])

const deleteBook=(isbn)=>{
    const filteredBookData=books.filter((element,index)=>{
      return element.isbn!==isbn
    })
    setBooks(filteredBookData)
}


  return (
 
 <div className="App">
      <h1><i>Book List App</i></h1>
      <div className='App'>
        <form autoComplete='off' onSubmit={handleAddBookSubmit} >
          <label>Title: </label>
          <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <br/><br/><br/>
          <label>Author: </label>
          <input type='text' required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
          <br/><br/><br/>
           
          <label>ISBN: </label>
          <input type='number' required value={isbn} onChange={(e)=>setIsbn(e.target.value)}/>
          <br/><br/><br/>
          <button type='submit'>ADD BOOK</button> 
        </form>
      </div>
      <div className='App'>
        {books.length>0 && 
        <div className="App">
           <table border='2px'>
            
            <tbody>
             <View books={books} deleteBook={deleteBook}/>
            </tbody>
           </table>
           <button onClick={()=>setBooks([])}>Remove All Books</button>
        </div>}
        {books.length < 1 && <h1>No books added yet</h1>}
       
      </div>
     
    </div>
  );
}
