const dataBooks = [
    {
        bookName: 'Whispers of the Mind',
        author: 'John Doe',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546097703l/76865.jpg'
    },
    {
        bookName: 'Eternal Shadows',
        author: 'Jane Smith',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630663027l/18050143.jpg'
    },
    {
        bookName: 'Journey Beyond the Stars',
        author: 'Alex Johnson',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1721984170l/216857785.jpg'
    },
    {
        bookName: 'Lost in Time',
        author: 'Emily Brown',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184l/10127019._SY475_.jpg'
    },
    {
        bookName: 'Reflections in the Sky',
        author: 'Michael Green',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg'
    },
    {
        bookName: 'The Last Dreamer',
        author: 'Laura White',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549393502l/43848929._SX318_.jpg'
    },
    {
        bookName: 'Echoes of Silence',
        author: 'Chris Blue',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442957271l/368593._SY475_.jpg'
    },
    {
        bookName: 'Hidden Realms',
        author: 'Sara Moore',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360936414l/7108725.jpg'
    },
    {
        bookName: 'Beyond the Horizon',
        author: 'Kevin Clark',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602574232l/55539565.jpg'
    },
    {
        bookName: 'Tales of the Unknown',
        author: 'Nancy Young',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386609333l/18176747.jpg'
    },
    {
        bookName: 'Whispers of Eternity',
        author: 'James Scott',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388211242l/69571.jpg'
    },
    {
        bookName: 'The Mystic Falls',
        author: 'Amy Lee',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1663707011l/60965426.jpg'
    },
    {
        bookName: 'Songs of the Earth',
        author: 'Robert Turner',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784l/36072.jpg'
    },
    {
        bookName: 'Glimpses of Time',
        author: 'Sandra Hall',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391275636l/6732019.jpg'
    },
    {
        bookName: 'The Secret Keeper',
        author: 'Patricia Adams',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627425434l/54785515._SY475_.jpg'
    },
    {
        bookName: 'Whispers of Change',
        author: 'Mark Anderson',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680014152l/123857637._SY475_.jpg'
    },
    {
        bookName: 'Enchanted Waters',
        author: 'Linda Clark',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435673032l/81948._SY475_.jpg'
    },
    {
        bookName: 'Mysteries Unveiled',
        author: 'Danielle Harris',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1702893819l/157981748._SY475_.jpg'
    },
    {
        bookName: 'The Midnight Whisperer',
        author: 'George Mitchell',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473396980l/2612._SY475_.jpg'
    },
    {
        bookName: 'Eclipse of the Moon',
        author: 'Rachel Wright',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg'
    },
    {
        bookName: 'Waves of Nostalgia',
        author: 'Samuel Perry',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1689111352l/157095669._SY475_.jpg'
    },
    {
        bookName: 'The Forbidden Land',
        author: 'Catherine Bell',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344266315l/3228917.jpg'
    },
    {
        bookName: 'Ancient Mysteries',
        author: 'Gregory Allen',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347654027l/2615.jpg'
    },
    {
        bookName: 'The Timeless Truth',
        author: 'Paula Evans',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598011736l/54898389._SY475_.jpg'
    },
    {
        bookName: 'Wandering Spirits',
        author: 'Bruce Young',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416445924l/4898.jpg'
    },
    {
        bookName: 'Dance of the Shadows',
        author: 'Olivia Martinez',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463241782l/30186948._SY475_.jpg'
    },
    {
        bookName: 'The Forgotten Realm',
        author: 'Steven King',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684815605l/112974860.jpg'
    },
    {
        bookName: 'Realm of Dreams',
        author: 'Andrew Collins',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391026083l/28815.jpg'
    },
    {
        bookName: 'The Vanishing Point',
        author: 'Theresa Coleman',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348014445l/9512985.jpg'
    },
    {
        bookName: 'Echoes from the Past',
        author: 'Joshua Lee',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1692883158l/197773418._SY475_.jpg'
    },
    {
        bookName: 'The Last Voyage',
        author: 'Rebecca Brown',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550917827l/1202._SX318_.jpg'
    },
    {
        bookName: 'Forgotten Lights',
        author: 'Isabella James',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545854312l/12609433._SY475_.jpg'
    },
    {
        bookName: 'The Hidden Flame',
        author: 'Leonard Carter',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556036622l/44525305.jpg'
    },
    {
        bookName: 'Path of the Ancients',
        author: 'Rachel Green',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400841022l/21343.jpg'
    },
    {
        bookName: 'The Lost Kingdom',
        author: 'Frank Lewis',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412047084l/4122.jpg'
    },
    {
        bookName: 'Twilight at Dawn',
        author: 'Megan Carter',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549433350l/40672036._SY475_.jpg'
    },
    {
        bookName: 'Beyond the Mist',
        author: 'Patrick Robinson',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1402600211l/69242.jpg'
    },
    {
        bookName: 'The Silent Hills',
        author: 'Diana Ross',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421841492l/25850.jpg'
    },
    {
        bookName: 'Reflections of the Heart',
        author: 'Karen Taylor',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1362382262l/558382._SY475_.jpg'
    }
];
export default dataBooks;