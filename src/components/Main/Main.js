import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Team from '../Team/Team';
import '../../images/bg.jpg';
import './Main.css';

const Main = () => {
    const [programmers, setProgrammers] = useState([]);
    const [programmerInfos, setProgrammersInfos] = useState([]);

    useEffect(() => {
        fetch('./programmersData.JSON')
        .then(res => res.json())
        .then(data => setProgrammers(data.programmers))
    }, []);

    const cartHandler = (programmerInfo) => {
        const newProgrammerInfo = [...programmerInfos, programmerInfo]
        setProgrammersInfos(newProgrammerInfo);
        console.log(programmerInfos)
    };

    return (
        <div className="main-container">
            <div className="row justify-content-center m-0 g-3">
                <div className="col col-sm-6 col-md-9  d-flex flex-wrap">
                    <div className="row m-0 g-3">
                        {
                            programmers.map(programmer => <Team
                                key={programmer.id}
                                programmer={programmer}
                                cartHandler={cartHandler}/>)
                        }
                    </div>
                </div>
                <div className="col col-sm-6 col-md-3 ">
                    <div className="row m-0 g-3">
                            <Cart programmerInfos={programmerInfos}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;