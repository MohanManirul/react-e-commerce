export default async function fetchCart(){
    const res = await fetch("https://cart-api.teamrabbil.com/api/cart-list",{
        method:"GET",
        headers :{
            "token" : localStorage.getItem('token'),
        }
    }); // return a buffer
    const data = await res.json();
    return data;
}