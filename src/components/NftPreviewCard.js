import nft from '../assets/images/image-equilibrium.jpg';
import ethlogo from '../assets/images/icon-ethereum.svg';
import clockicon from '../assets/images/icon-clock.svg';
import avatar from '../assets/images/image-avatar.png';

function NftPreviewCard(props) {

    return(
        <div className='container'>
            <div className='bg-[#15273f] w-[400px] mx-auto mt-5 rounded-xl'>
                <div className='w-[350px] mx-auto py-[24px] drop-shadow-lg'>
                    <img src={nft} alt='nft' className='rounded-xl'/>
                </div>
                <h1 className='text-white text-2xl font-bold px-[25px]'>{props.title}</h1>
                <p className='text-[#90abd4] text-lg font-semibold px-[25px] pt-5'>{props.desc}</p>
                <div className='grid grid-cols-2 px-[25px] pt-5'>
                    <div className='flex'>
                        <img src={ethlogo} alt='ETH logo' className='self-center mb-4' />    
                        <p className='text-[#24f2ed] text-md font-semibold pl-2'>{props.ethprice} ETH</p>
                    </div>    
                    <div className='flex pb-4'>
                        <img src={clockicon} alt='clock icon' className='self-center' />
                        <p className='text-[#90abd4] text-md font-semibold pl-2'>{props.timeleft} Days Left</p>
                    </div>
                </div>
                <hr className='mx-[25px] border-[#90abd4]'/>
                <div className='flex px-[25px] py-4'>
                    <div className='pr-5'>
                        <img src={avatar} alt='avatar' className='rounded-full border-2 border-white h-[40px]' />
                    </div>
                    <p className='my-auto text-[#90abd4] text-md font-semibold'>Creation of <span className='text-white'>{props.author}</span></p>
                </div>
            </div>
        </div>
    );
}


export default NftPreviewCard;