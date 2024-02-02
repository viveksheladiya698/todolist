import { useState } from 'react';
import './App.css';
function App() {
    let [t1, sett1] = useState('');
    let [arr, setarr] = useState([]);
    let [id, setid] = useState("");
    let [s1, sets1] = useState(false);
    let [ser, setser] = useState("");
    let [tmp, setmp] = useState([]);

    let task = () => {
        if (s1) {
            let tmp = [...arr];
            tmp[id].tk = t1;
            setarr(tmp);
            sets1(false);
        }
        else {
            setarr([...arr, { tk: t1, checked: false }]);
            setmp([...arr, { tk: t1, checked: false }]);
        }
    }
    let del = (ind) => {
        let data = arr.filter((ar, ina) => {
            return ina != ind;
        })
        setarr(data);
    }
    let edit = (ind) => {
        let dem = [...arr];
        sett1(dem[ind].tk);
        setid(ind)
        sets1(true);
    }
    let fin = () => {
        let a = [];
        tmp.filter((el) => {
            if (el.tk === ser) {
                a.push(el);
                setarr(a);
            }
        })
    }
    let all = () => {
        setarr(tmp);
    }
    let chk = (ind) => {

        let chk = [...arr];
        chk[ind].checked = !chk[ind].checked;
        setmp(chk);
    }
    let cmp = () => {

        let cm = tmp.filter((ele, ind) => {
            return ele.checked == true;
        })
        setarr(cm);
    }
    let un = () => {
        let cm = tmp.filter((ele, ind) => {
            return ele.checked == false;
        })
        setarr(cm);
    }
    return (
        <div className="App">
            <div className="main">
                <div className="pare">
                    <div className="todo">
                        <div className="screen">
                            <div className="scr">
                                <div className="in">
                                    <input type="text" placeholder='Add Tasks...' value={t1} onChange={(e) => { sett1(e.target.value) }}></input>
                                </div>
                                <div className="input-box">
                                    <input type="button" value={"Add"} onClick={task}></input>
                                </div>
                            </div>
                        </div>
                        <div className="buttn">
                            <div className="feat">
                                <div className="btn">
                                    <input type="text" onChange={(e) => { setser(e.target.value) }} placeholder='Search'></input>
                                    <input type="button" onClick={() => { fin() }} value={"search"}></input>
                                </div>
                                <div className="sort">
                                    <input type="button" onClick={() => { all() }} value={"All Tasks"}></input>
                                    <input type="button" value={"Complete Tasks"} onClick={() => { cmp() }}></input>
                                    <input type="button" value={"UnComplete Tasks"} onClick={() => { un() }}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result">
                        <div className="bg">
                            {
                                arr.map((ele, ind) => {
                                    return (
                                        <div className='par'>
                                            <input type="checkbox" onClick={() => { chk(ind) }} checked={ele.checked}></input>
                                            <div className='list'>
                                                <span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.tk}</span>
                                                <div className="bt">
                                                    <input type="button" value={"Delete"} onClick={() => { del(ind) }}></input>
                                                    <input type="button" value={"Edit"} onClick={() => { edit(ind) }}></input>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;