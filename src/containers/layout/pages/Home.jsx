import React ,{ Component } from "react";
import CaroselAdd from "../../../components/carosel";
import SweetAdd from "../../../components/sweetalert";

class Home extends Component{
    render(){
        return (
            <div>
             <h1>Ini Aplikasi Contoh Dengan Ant Design</h1>

            <CaroselAdd />
            <SweetAdd />
            </div>
        );
    }
}

export default Home;