import crown from '../../assets/images/crown.png'
import { NewReleaseCard } from '../new_release_card/new_release_card';

export const NewRelease = () => {

    const newReleaseList = [
        {
            'tag': 'Announcement',
            'title': 'Drake Streams Stake!',
            'about': '2.5m giveaways, 1am GMT Friday',
            'buttonTag': 'Stream Info',
            'image': crown
        },
        {
            'tag': 'Promo',
            'title': '$10 Million Christmas Race',
            'about': 'Race To The New Year',
            'buttonTag': 'Race Now',
            'image': crown
        },
        {
            'tag': 'Promo',
            'title': 'Conquer The Casino',
            'about': 'Win a share in $50000 Every Week',
            'buttonTag': 'Play Now',
            'image': crown
        },
        {
            'tag': 'Promo',
            'title': 'Holiday Jackpot Duel!',
            'about': 'Win a share of $100000!',
            'buttonTag': 'Play Now',
            'image': crown
        }
    ];

    const listStyle = {
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem', // Equivalent to space-x-4 in Tailwind
        padding: '1rem',
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For Internet Explorer
      };
    
      const hideScrollbar = {
        display: 'none', // Hides scrollbar for Chrome, Safari, and Edge
      };

    return (
        <>
            <div>
                {/* <h1 className='text-white font-semibold text-lg'>New Release</h1> */}
                <ul style={listStyle}>
                    {newReleaseList.map((data, index) => (
                        <li key={index} style={{listStyle: hideScrollbar}}>
                            <NewReleaseCard data={newReleaseList[index]}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}