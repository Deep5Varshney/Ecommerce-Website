var products=[

    {   
        "photo":"../Ecommerce Website/Image/products/f1.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f2.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f3.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f4.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f5.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f6.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f7.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    },

    {   
        "photo":"../Ecommerce Website/Image/products/f8.jpg",
        "Company":"Adidas",
        "Name":"Cartoon T astronaut shirts",
        "active": false,
        "price":78
    }
];


const EcommerceWebsite ={
     data (){
        return{
           products: window.products,
        }
     }
};

Vue.createApp(EcommerceWebsite).mount('#app');