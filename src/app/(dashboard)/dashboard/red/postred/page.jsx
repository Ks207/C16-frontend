
"use client"

import { AiOutlineUpload, AiTwotoneEdit } from 'react-icons/ai'

import CardPost from '../components/cardPost/CardPost';
import styles from "./styles/postred.module.css"

const postred = () => {

  const PruebaRed = [
    {
      id: 1,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Usuarios',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
    {
      id: 2,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
    {
      id: 3,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
    {
      id: 4,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
    {
      id: 5,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
    {
      id: 6,
      image:"https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5",
      name: 'Ronda',
      description:" Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus",
    },
  ];

  return (
    <div className={styles.containerRed}>
      <div className={styles.title}>
        <h1>Nuestra Red </h1>
        <AiOutlineUpload />
      </div>
      <div className={styles.seccionCard}>
     <CardPost/>
     </div>
      <div >
    <button className={styles.buttonsave}> Guardar Cambios</button>
      </div>
    </div>
  );
};

export default postred;
