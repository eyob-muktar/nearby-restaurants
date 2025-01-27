import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result1 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('The Gourmet Bistro', 
    ST_GeomFromText('POINT(38.7582 9.0300)', 4326),  
    '123 Bole Road, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 10:00 PM', 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg');`;

  const result2 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Pasta Paradise', 
    ST_GeomFromText('POINT(38.7599 9.0273)', 4326),  
    '456 Kazanchis, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 9:00 PM', 'https://images.pexels.com/photos/17294746/pexels-photo-17294746/free-photo-of-elegant-table-settings-in-a-modern-restaurant.jpeg');`;

  const result3 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Café Delights', 
    ST_GeomFromText('POINT(38.7381 9.0370)', 4326),  
    '789 Megenagna, Addis Ababa, Ethiopia', 
    'Mon-Sun: 7:00 AM - 5:00 PM', 'https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg');`;

  const result4 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('The Spice Garden', 
    ST_GeomFromText('POINT(38.7989 9.0216)', 4326),  
    '101 Old Airport Road, Addis Ababa, Ethiopia', 
    'Mon-Sun: 12:00 PM - 10:00 PM', 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg');`;

  const result5 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Lalibela Café', 
    ST_GeomFromText('POINT(38.7464 9.0295)', 4326),  
    '112 Piassa, Addis Ababa, Ethiopia', 
    'Mon-Sun: 8:00 AM - 6:00 PM', 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg');`;

  const result6 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Green Garden Restaurant', 
    ST_GeomFromText('POINT(38.7632 9.0200)', 4326),  
    '205 Bole Bulbula, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 10:00 PM', 'https://images.pexels.com/photos/17294746/pexels-photo-17294746/free-photo-of-elegant-table-settings-in-a-modern-restaurant.jpeg');`;

  const result7 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Bunna Café', 
    ST_GeomFromText('POINT(38.7476 9.0400)', 4326),  
    '88 Addis Ketema, Addis Ababa, Ethiopia', 
    'Mon-Sun: 8:00 AM - 6:00 PM', 'https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg');`;

  const result8 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Tena Yistilign', 
    ST_GeomFromText('POINT(38.7590 9.0254)', 4326),  
    '567 Bole, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 10:00 PM', 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg');`;

  const result9 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Saray Restaurant', 
    ST_GeomFromText('POINT(38.7744 9.0165)', 4326),  
    '333 Nifas Silk Lafto, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 9:00 PM', 'https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg');`;

  const result10 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Horizon Restaurant', 
    ST_GeomFromText('POINT(38.7487 9.0211)', 4326),  
    '404 Arat Kilo, Addis Ababa, Ethiopia', 
    'Mon-Sun: 12:00 PM - 10:00 PM', 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg');`;

  const result11 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Yegna Café', 
    ST_GeomFromText('POINT(38.7425 9.0342)', 4326),  
    '220 Lideta, Addis Ababa, Ethiopia', 
    'Mon-Sun: 7:00 AM - 5:00 PM', 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg');`;

  const result12 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Mamma Mia', 
    ST_GeomFromText('POINT(38.7441 9.0268)', 4326),  
    '777 Piazza, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 9:00 PM', 'https://images.pexels.com/photos/17294746/pexels-photo-17294746/free-photo-of-elegant-table-settings-in-a-modern-restaurant.jpeg');`;

  const result13 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Huda Restaurant', 
    ST_GeomFromText('POINT(38.7404 9.0372)', 4326),  
    '324 Kirkos, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 9:00 PM', 'https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg');`;

  const result14 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('The Lotus Lounge', 
    ST_GeomFromText('POINT(38.7775 9.0228)', 4326),  
    '789 CMC, Addis Ababa, Ethiopia', 
    'Mon-Sun: 12:00 PM - 10:00 PM', 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg');`;

  const result15 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Pillars Restaurant', 
    ST_GeomFromText('POINT(38.7620 9.0225)', 4326),  
    '453 Bole Medhanialem, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 9:00 PM', 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg');`;

  const result16 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Delicious Dine', 
    ST_GeomFromText('POINT(38.7369 9.0299)', 4326),  
    '321 Gullele, Addis Ababa, Ethiopia', 
    'Mon-Sun: 8:00 AM - 6:00 PM', 'https://images.pexels.com/photos/17294746/pexels-photo-17294746/free-photo-of-elegant-table-settings-in-a-modern-restaurant.jpeg');`;

  const result17 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Sambussa House', 
    ST_GeomFromText('POINT(38.7367 9.0385)', 4326),  
    '112 Yeka, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 8:00 PM', 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg');`;

  const result18 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Kategna Restaurant', 
    ST_GeomFromText('POINT(38.7638 9.0312)', 4326),  
    '250 Bole, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 9:00 PM', 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg');`;

  const result19 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Golden Spoon', 
    ST_GeomFromText('POINT(38.7427 9.0223)', 4326),  
    '888 Lideta, Addis Ababa, Ethiopia', 
    'Mon-Sun: 10:00 AM - 9:00 PM', 'https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg');`;

  const result20 =
    await prisma.$executeRaw`INSERT INTO "Restaurant" (name, location, address, opening_hours, image)  
  VALUES ('Taste of Ethiopia', 
    ST_GeomFromText('POINT(38.7398 9.0210)', 4326),  
    '500 Arat Kilo, Addis Ababa, Ethiopia', 
    'Mon-Sun: 11:00 AM - 10:00 PM', 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg');`;
  console.log(result1);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
