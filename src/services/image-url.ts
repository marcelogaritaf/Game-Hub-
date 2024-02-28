// metodo para poder optimizar el size de la imagen 
const getCroppedImageUrl = (url:string)=>{
    //si el url es falso retorne un valor vacio
    if (!url)return ''
    const target= 'media/'
    const index=url.indexOf(target)+target.length
   return url.slice(0,index)+ 'crop/600/400/' + url.slice(index)
}
export default getCroppedImageUrl