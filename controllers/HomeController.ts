//index
export function index(req, res, next) {
    let phones = [
          {
              title: 'iphone',
              image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
              desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
          },
          {
              title: 'iphone',
              image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
              desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
          },
          {
              title: 'iphone',
              image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
              desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
          },
          {
              title: 'iphone',
              image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
              desc: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…'
          }
    ];
    res.render('index', { phones: phones });
}
