import "../style/styleScreen.css";
import { LeftSquare } from "./LeftSquare";
import { Search } from "./Search";
import { AlignTextLeft } from "./AlignTextLeft";

export const MainTitleContainer = (): JSX.Element => {
    return (  
        <div className="titleContainer">
            <p className="CCI-amcham">
            <span style={{color: '#2334DA'}}>Миссия</span> Франко-российской торгово-промышленной палаты (CCI<br/>
            France Russie) - <span style={{color: '#2334DA'}}>развитие экономического сотрудничества</span> двух<br/> стран и сопровождение французских и российских компаний на<br/>
            каждом этапе развития бизнеса.
            </p>
        </div> 
    );
};
