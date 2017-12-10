const phones = [
    {
        id:1,
        title: 'iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
        desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
    },
    {
        id:2,
        title: 'iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
        desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
    },
    {
        id:3,
        title: 'iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
        desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
    },
    {
        id:4,
        title: 'iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
        desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
    }
];

//index
export function index(req, res, next) {
    res.render('index', { phones });
}

//findByID
export function findById(req, res, next) {
    let id = req.params.id;
    let phone = phones.filter(phone => phone.id == id)[0];
    res.render('detail', { phone });
}
