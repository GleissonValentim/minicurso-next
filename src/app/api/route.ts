import { Noticia } from "@prisma/client";
import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(request: Request){

    const {titulo, conteudo, descricao, imagem}:Noticia = await request.json();

    const noticia = await prisma.noticia.create({data:{conteudo, descricao, titulo, imagem}})
    revalidatePath('/')

    return Response.json(noticia);
}