import React, {useState} from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonWrap from "./components/ButtonWrap";
import Button from "./components/Button";



const CalculatorApp = () =>{
  

  
  let [calc, setCalc] = useState({
    sign:"",
    num:0,
    res:0
  });

  const numClickHandler = (e) =>{
    e.preventDefault();
    const value = e.target.innerHTML;
    
        
      setCalc(
          {
        ...calc,
        num:
          calc.num=== 0 && value==="0"
          ? "0"
          : calc.num % 1 === 0
            
          ? Number(calc.num + value)
          : calc.num + value,
        res: !calc.sign? 0 : calc.res

        
      });
    
    
    
  }

  const commaClickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

const signClickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  });
};

const equalsClickHandler = () => {
  
  if (calc.sign && calc.num) {
    
    const math = (a, b, sign) =>
    {
        let result = 0;
        switch(sign){
            case "+":
                result = a + b;
                break;

            case "-":
                result = a - b;
                break;
            case "X":
                result = a * b;
                break;
            case "/":
                if(b === 0){
                    result = 'Divide by 0 Error'
                } else {
                    result = a / b;
                }
                break;
            default:
              break;
        }
        return result;
    }
      
        setCalc({
            ...calc,
            res: math(Number(calc.res), Number(calc.num), calc.sign),
            sign: "",
            num: 0,
          });
    
    
  }
};

const invertClickHandler = () => {
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.num ? calc.res  : calc.res * -1,
    sign: calc.sign,
  });
};

const percentClickHandler = () => {
  let num = calc.num ? parseFloat(calc.num) : 0;
  let res = calc.res ? parseFloat(calc.res) : 0;

  setCalc({
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  });
};

const resetClickHandler = () => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    res: 0,
  });
};


const btnObjs = [
  [
    {
      display:"C",
      value: "C",
      onClick: resetClickHandler,
      className: ""
    },
    {
      display:"+/-",
      value: "+/-",
      onClick: invertClickHandler,
      className: ""
    },
    {
      display:"%",
      value: "%",
      onClick: percentClickHandler,
      className: ""
    },
    {
      display:"/",
      value: "/",
      onClick: signClickHandler,
      className: ""
    }
  ],
  [
    {
      display:"7",
      value: "7",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"8",
      value: "8",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"9",
      value: "9",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"X",
      value: "X",
      onClick: signClickHandler,
      className: ""
    }
  ],
  [
    {
      display:"4",
      value: "4",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"5",
      value: "5",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"6",
      value: "6",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"-",
      value: "-",
      onClick: signClickHandler,
      className: ""
    }
  ],
  [
    {
      display:"1",
      value: "1",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"2",
      value: "2",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"3",
      value: "3",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:"+",
      value: "+",
      onClick: signClickHandler,
      className: ""
    }
  ],
  [
    {
      display:"0",
      value: "0",
      onClick: numClickHandler,
      className: ""
    },
    {
      display:".",
      value: ".",
      onClick: commaClickHandler,
      className: ""
    },
    {
      display:"=",
      value: "=",
      onClick: equalsClickHandler,
      className: "equals"
    },
  ],
]

  return(
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonWrap>
        {
          
            btnObjs.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn.className}
                  onClick={btn.onClick}
                  value={btn.value}
                />
              )
            })
          
        }
        
      </ButtonWrap>
    </Wrapper>
  );
};

export default CalculatorApp;