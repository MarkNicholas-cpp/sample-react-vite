import './Greet.css'
import { useState, useEffect } from "react";

interface Student{
  name:String
  age:Number
  roll:String
}
const Greet = ({name}:{
  name?:string
}) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const calculateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
        setGreeting("Good morning");
      } else if (currentHour < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    calculateGreeting();
  }, []);

  return (
   name?(<p className="text-2xl font-semibold" title="🤗">
      {greeting}, {name}!
    </p>):<p>{greeting}, {'User'}</p>
  );
};

export default Greet;
