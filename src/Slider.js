import React, {useState, useEffect} from 'react';
import Posts from './Posts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const arrUsers = [{
    id: 0,
    img: '0',
    name: '0',
    blog: ['1', '2', '3']
}, {
    id: 1,
    img: '3',
    name: '1',
    blog: ['4', '5', '6']
}, {
    id: 2,
    img: '11',
    name: '2',
    blog: ['7', '8', '9']
}, {
    id: 3,
    img: '1',
    name: '3',
    blog: ['10', '11', '12']
}, {
    id: 4,
    img: '12',
    name: '4',
    blog: ['13', '14', '15']
}, {
    id: 5,
    img: '13',
    name: '5',
    blog: ['16', '17', '18']
}, {
    id: 6,
    img: '7',
    name: '6',
    blog: ['19', '20', '21']
}, {
    id: 7,
    img: '8',
    name: '7',
    blog: ['22', '23', '24']
}, {
    id: 8,
    img: '9',
    name: '8',
    blog: ['25', '26', '27']
}, {
    id: 9,
    img: '10',
    name: '9',
    blog: ['28', '29', '30']
}];

function Slider() {
    const [data, setData] = useState(arrUsers);
    const [user, setUser] = useState(null);
    const [active, setActive] = useState(data[0]);

    let res = data.slice(0, 4).map((item, index) => {
        let link = `https://i.pravatar.cc/300?img=${item.img}`;

        return <div key={index}
                    className={`${active === item ? 'active' : ''} slider__box`}>
            <div className={'slider__img'}
                 onClick={(event) => clickImg(event, index)}>
                {user && <img src={link} alt={user[item.name].name}/>}
                <span className={'border'}/>
            </div>
            {user && <div className={'slider__info'}>
                <h3 className={'slider__name'}>{user[item.name].name}</h3>
                <h3 className={'slider__company'}>{user[item.name].company.name}</h3>
            </div>}
        </div>;
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    function next() {
        let copy = [...data]
        const first = copy.splice(0, 1);
        copy = [...copy, ...first];
        setData(copy);
    }

    function prev() {
        let copy = [...data]
        const last = copy.splice(copy.length - 1, 1);
        copy = [...last, ...copy];
        setData(copy);
    }

    function clickImg(event, index) {
        data.slice(0, 4).map((blog, ind) => {
            if (index === ind) {
                setActive(blog);
            }
            return false;
        })
    }

    return <>
        <div className="slider">
            <div className="slider__arrows">
                <div className="slider__arrow-box">
                    <FontAwesomeIcon icon={faArrowLeft}
                                     className={'slider__arrow'}
                                     onClick={prev}
                    />
                </div>
                <div className="slider__arrow-box">
                    <FontAwesomeIcon icon={faArrowRight}
                                     className={'slider__arrow'}
                                     onClick={next}/>
                </div>
            </div>

            <div className="slider__images">
                {res}
            </div>
        </div>
        <Posts arrUsers={data} active={active} company={user && user[active.name].company.name}/>
    </>;
}

export default Slider;
