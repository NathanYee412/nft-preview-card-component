import './NftPreviewCard.css';
import nft from '../assets/images/image-equilibrium.jpg';
import ethlogo from '../assets/images/icon-ethereum.svg';
import clockicon from '../assets/images/icon-clock.svg';
import avatar from '../assets/images/image-avatar.png';

function NftPreviewCard(props) {

    return(
        <div className='container'>
            <div className='card'>
                <img src={nft} alt='nft' className='nft' />
                <h1 className='title'>{props.title}</h1>
                <p className='desc'>{props.desc}</p>
                <div className='priceandtime'>
                    <div className='logovalue'>
                        <img src={ethlogo} alt='ETH logo' />
                        <p className='price'>{props.ethprice}ETH</p>
                    </div>
                    <div className='logovalue'>
                        <img src={clockicon} alt='clock icon' />
                        <p className='time'>{props.timeleft}</p>
                    </div>
                </div>
                <div className='logovalue'>
                    <img src={avatar} alt='avater' className='avatar' />
                    <p>Creation of {props.author}</p>
                </div>
            </div>
        </div>
    );
}


export default NftPreviewCard;