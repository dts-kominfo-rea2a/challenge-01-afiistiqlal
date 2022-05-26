// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// color
const favoriteColor = ['Yellow', 'Pink', 'White', 'Purple', 'Blue', 'Black', 'Grey'];
const favoriteColorMonica = new Set([favoriteColor[0], favoriteColor[1], favoriteColor[2], favoriteColor[3]]) ;
const favoriteColorWendy = new Set([favoriteColor[4], favoriteColor[5], favoriteColor[6]]);

// education
const education = {
    Monica :
    [
        {name: "SD 01", city: "Jakarta", graduate: 2016},
        {name: "SMP 02", city: "Jakarta", graduate: 2019},
        {name: "SMA 03", city: "Tangerang"}
    ],
    Wendy :
    [
        {name: "SD 02", city: "Jakarta", graduate: 2010},
        {name: "SMP 03", city: "Bogor", graduate: 2013},
        {name: "SMA 01", city: "Surabaya", graduate: 2016},
        {name: "Universitas Maju", city: "Tangerang"}
    ]
};

// favoriteRestaurant
const favoriteRestaurant = ['Bento', 'Sushi', "Pancake", "Eggy", "Tempura", "Padang", "Tteok", "Katsu", "Geprek"];
const favoriteRestaurantMonica = new Set(
    [
        favoriteRestaurant[0], favoriteRestaurant[1], favoriteRestaurant[2], favoriteRestaurant[3], 
        favoriteRestaurant[4], favoriteRestaurant[0], favoriteRestaurant[3], favoriteRestaurant[5], 
        favoriteRestaurant[6], favoriteRestaurant[1], favoriteRestaurant[1]
    ]
);
const favoriteRestaurantWendy = new Set(
    [
        favoriteRestaurant[4], favoriteRestaurant[0], favoriteRestaurant[1], favoriteRestaurant[2], 
        favoriteRestaurant[5], favoriteRestaurant[7], favoriteRestaurant[8], favoriteRestaurant[2], 
        favoriteRestaurant[3],  
    ]
);

const paraPengguna = [
    {
        nama : 'Monica',
        gender : 'Female',
        age : 17,
        email : 'monica@dingdong.com',
        isHavePet : true,
    },
    {
        nama : 'Wendy',
        gender : 'Male',
        age : 23,
        email : 'wendy@dingdong.com',
        isHavePet : false,
    },
];

const firstUser = {
    name : paraPengguna[0].nama,
    gender : paraPengguna[0].gender,
    age : paraPengguna[0].age,
    email : paraPengguna[0].email,
    isHavePet : paraPengguna[0].isHavePet,
    favoriteColor : [...favoriteColorMonica],
    education : education.Monica,
    favoriteRestaurant : [...favoriteRestaurantMonica]
};
const secondUser = {
    name : paraPengguna[1].nama,
    gender : paraPengguna[1].gender,
    age : paraPengguna[1].age,
    email : paraPengguna[1].email,
    isHavePet : paraPengguna[1].isHavePet,
    favoriteColor : [...favoriteColorWendy],
    education : education.Monica,
    favoriteRestaurant : [...favoriteRestaurantWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};