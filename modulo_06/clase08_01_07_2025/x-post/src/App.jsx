import React from 'react';
import Post from './components/Post';

function App() {
  const posts = [
    {
      name: "Luis Donaldo",
      username: "@LuisDo",
      avatar: "https://img.fotocommunity.com/mi-perfil-68480766-eb7e-4896-b843-c7ccd3e5d751.jpg?height=1000",
      date: "Jun 17, 2025 - 10:34 AM",
      text: "Nuevo proyecto con React 🚀 :D",
      views: 12,
      comments: 45,
      likes: 13,
      shares: 2
    },
    {
      name: "Maria Fernandez",
      username: "@mariF",
      avatar: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
      date: "Jun 17, 2025 - 10:34 AM",
      text: "Este es mi primer post 😳",
      views: 1,
      comments: 5,
      likes: 8,
      shares: 8
    },
    {
      name: "Ana Pérez",
      username: "@AnaPz",
      avatar: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
      date: "Jul 5, 2025 - 02:30 PM",
      text: "Publicación de prueba :D",
      views: 1,
      comments: 2,
      likes: 1,
      shares: 1
    }

  ];

  return (
    <div>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
}

export default App;
