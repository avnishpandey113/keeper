import React from 'react';
import notes from '../notes';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => 
        <Note key={note.id}
          title={note.title}
          content={note.content} />
      )}
      <Footer />
    </div>);
}

export default App;