
export default async function fetchProducts(){
    const res = await fetch("https://cart-api.teamrabbil.com/api/product-list"); // return a buffer
    const data = await res.json();
    console.log('ok');
    return data.data;
}