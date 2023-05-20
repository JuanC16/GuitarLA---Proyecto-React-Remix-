import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers"

export async function loader({params}){
  const {postUrl}=params;
  const post = await getPost(postUrl)

  if(post.data.length===0){
    throw new Response("",{
      status: 404,
      statusText: "Entrada no encontrda"
    })
  }
  return post
}

export function meta({data}){

  if(!data){
      return[
          {title: "GuitarLA - Entrada no encontrada"},
          {descripcion: "Entrada no encontrada"}
      ]
  }
 return[
  {title:`GuitarLA - ${data.data[0].attributes.titulo}`},
  {descripcion: `GuitarLA Blog Entrada ${data.data[0].attributes.titulo} `}
 ]
}

function Post() {

  const post =useLoaderData()
  const {titulo,imagen,contenido,publishedAt}=post?.data[0].attributes

  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post