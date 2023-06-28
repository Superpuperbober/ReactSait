import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function A() {
    const listImg = ["97bf7320da497271fe96cba642ef8707.jpg",'c0222e1b1ea3939c58367f271a8491e1.jpg',
        "cdaa03e5eefc94d1a2c71f354fd04c8e.jpg",'m1000x1000.jpg','865e7fd0ed5d9f159baab64f.jpg','1013629744.jpg']

    function Head() {
        const logoImages =listImg.map((img, index) => <img key={index} src={img} />);
        return(
            <div className="head">
                {logoImages}
            </div>
        )
    }
    function Tagline() {
        return(
            <h1>
                Переживите адреналин от захватывающих выступлений:<br/> здесь можно купить билеты на концерты металл групп
            </h1>
        )
    }
    function Tagline2() {
        return(
            <h1>
               Выберете группу на концерте которой хотите оказаться
            </h1>
        )
    }

    const images = ['1920x1303-px-band-bands-black-concert-concerts-group-groups-guitar-guitars-hard-heavy-metal-rock-watain-1680893.jpg',
        '2000x1333-px-band-bands-black-concert-concerts-fire-group-groups-guitar-guitars-hard-heavy-metal-rock-watain-1679491.jpg',
        'img3.akspic.ru-tyazhelyj_metall-basist-gitarist-rokkoncert-muzykant-3729x2481.jpg',
        ];
    function ImageSlider({ images }) {
        const [i, seti] = React.useState(0);
        const Past = () => {seti(i - 1);};
        const Next = () => {seti(i + 1);};
        return (
            <div className='image-slider'>
                <button className='image-sliders button' onClick={Past} disabled={i === 0}>Past</button>
                <img src={images[i]} alt="current" />
                <button onClick={Next} disabled={i === images.length - 1}>Next</button>
            </div>
        );
    }

    const items = [
        { id: 1, title: 'Sabaton' },
        { id: 2, title: 'Iron Maiden' },
        { id: 3, title: 'Deep Purple' },
        { id: 4, title: 'Slayer' },
        { id: 5, title: 'Sinster' },

    ];

    let a =null;

    function List({ items }) {
        const [selectedItem, setSelectedItem] = React.useState();
        const ItemClick = (item) => {setSelectedItem(item);a=item.title};

        return (
            <div>
                <ul className="list">
                    {items.map((item) => (
                        <li key={item.id} onClick={() => ItemClick(item)}
                            style={{background:selectedItem?.id===item.id ? 'orange':'black',}}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    function BuyButton() {
        const [message, setMessage] = React.useState('');

        const Click = () => {
            if (a)
            setMessage('Заказ на концерт '+a+' успешно оформлен!');
            else setMessage('Вы не выбрали куда пойти');
        };

        return (
            <div className="buy-button">
                <button onClick={Click}>Купить</button>
                <p className='buy-button-purchased'>{message}</p>
            </div>
        );
    }
    return (
        <div>
            <Head listImg={listImg} />
            <Tagline/>
            <ImageSlider images={images} />
            <Tagline2/>
            <List items={items} />
            <BuyButton/>;
        </div>
    );
}
root.render(<A/>)
reportWebVitals();
