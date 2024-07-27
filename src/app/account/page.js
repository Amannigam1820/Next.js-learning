import { redirect } from "next/navigation";

export default function accountPage (){
    const profileInfo = null;
    if(profileInfo === null){
        redirect('/product/view-product?search=product=1&random=qwerty')
    }
    
        return (
            <div>
                <h1>this is account page</h1>
            </div>
        )
    }
