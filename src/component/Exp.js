//named export
export let name="Roystan";
export let phone=9148239448;//individual exporting

let address="Mangalore";//exporting once at bottom
let pincode=575001;
export {address,pincode} //group export

//Default export
const Hello=()=>{
    alert("this is hello function")
}
export default Hello

export let add="Addition";
export let sub="Substraction";
export let multi="Multiplication";
export let div="Division";