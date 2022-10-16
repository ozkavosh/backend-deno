import app from './app.ts';

const PORT = Number(Deno.env.get('PORT')) || 8080;

try{
    console.log(`Servidor listo y escuchando en el puerto ${PORT}`);
    await app.listen({ port: PORT });
}catch (e){
    console.log(e);
}
