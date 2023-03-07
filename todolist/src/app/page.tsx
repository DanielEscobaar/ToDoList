import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

let newActivity = '';

    interface Act{
        text: string;
        status: boolean;
    }
	
	function addToList() 
    {
        newActivity.trim();
		if(newActivity.length > 1){
            
            console.log(newActivity);
            list_act = [...list_act, {text: newActivity, status: false}];
            newActivity = '';
        }
        else alert("No s'ha introduit ningun text");
	}
	
	function removeFromList(act: Act) 
    {
        list_act = list_act.filter( (value : Act) => { return value != act } )
    }

export default function Home() {

    
  return (
  )
}
