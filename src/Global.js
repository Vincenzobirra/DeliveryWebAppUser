export var Global = {
    endPoint: '',
    token: '',
    iconCart: 'https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png',
    iconDelivery: 'https://cdn.icon-icons.com/icons2/2822/PNG/512/food_delivery_bike_icon_179642.png',
    iconTakeAway: 'https://cdn.icon-icons.com/icons2/2822/PNG/512/food_delivery_bag_icon_179639.png',
    iconCalendar: 'https://www.citypng.com/public/uploads/small/11640487321kzngzwhl4xjx4fmyj7fpzntijpwi9ubqobum84ysu6zolaibglvy9o07wqaordtxe6cdarnhrofibhfxrvzwwmfkedcylp7x0sn2.png',
    logo: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2c0eHB3NDdqY212Y2dtbGJsaHJueTM2cXNoZ3Z3Z3g2Nzg3bGN4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mTEBPZEE391Fsmiavx/giphy.gif",
    arrowBack: 'https://clipart-library.com/images/8TG6aExzc.png',
    showModalContract: null,
    restaurantSelected: 0, //indice del ristorante selezionato se piu sedi presenti zero di default
    typeShop: false, // delivery or takeAway
    dateOrder: false, // data ritiro o consegna
    hoursOrder: false, //ora ritiro ordine
    month: false,
    restaurantSelected: 0,
    
    restaurants: [
        {
            name: 'Ristorante',
            img: 'url',
            province: 'napoli',
            municipality: 'ercolano',
            zipCode: '80056',
            address: 'via vai',
            coordinates: '',
            phone: '',
            email: 'restaurant@gmail.com',
            pIva: '',
            menu: [{}, {}, {}],
            delivery: true,
            takeAway: true,
            ordersOnlyToday: false, //se true non mostra il calendario
            capDelivery: ['80055, 80056, 80053, 80065'],
            promo:[],
            promo_points: [],
            deliveryPrice: {
                free: false,
                price: 2.50, // se maggiore di 0 annulla la regola dei cap
                freeForAmountMin: 20.00, //se il totale del carrello è >= di 20€ annulla le altre regole. se disattivo FALSE
                priceForCap: {
                    80055: 1.50,
                    80056: 2.50,
                    80022: 3.00,
                }
            },
            openingTime: {
                0: {                         //domenica 0
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                1: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                2: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                3: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                4: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                5: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                6: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
                7: {
                    openTime_am: '18.00',
                    closeTime_am: '00.00',
                    openTime_pm: '18.00',
                    closeTime_pm: '00.00',
                    open: true,
                },
            },
            orderTimeSlot: [
                {
                    slot: '18.00/18.15',
                    numbersOrdersReceived: 3,
                    limitOrders: 3,
                },
                {
                    slot: '18.15/18.30',
                    numbersOrdersReceived: 0,
                    limitOrders: 3,
                },
                {
                    slot: '18.30/18.45',
                    numbersOrdersReceived: 3,
                    limitOrders: 3,
                },
                {
                    slot: '18.45/19.00',
                    numbersOrdersReceived: 0,
                    limitOrders: 3,
                },
                {
                    slot: '19.00/19.15',
                    numbersOrdersReceived: 0,
                    limitOrders: 3,
                },
            ]

        }
    ],

    user: {
        name: 'vincenzo',
        surname: 'birra',
        img: 'url',
        province: 'napoli',
        municipality: 'ercolano',
        zipCode: '80056',
        address: 'via vai',
        phone: '',
        email: '',
        points: 0,
        ordersHistory: [{}, {}, {}],
    },


    cart: {
        amount_gross: 15.00,
        priceDelivery: 2.00,
        finalePrice: 17.00,            //totale carrello + consegna se presente
        totalPoints: 0,
        codePromo: false,
        dateDelivery: '',            //Global.dateOrder, //'09-11-2023,
        hoursDelivery: '',          // Global.hoursOrder, //21.35'
        typeOrder: '',             // Global.typeOrder,
        userInfo: '',             // Global.user,
        stateOrder: '',
        qrCode: '',
        dateSendOrder: '09-11-2023',
        hoursSendOrder: '21.35',
        numberProduct: 0,
        products: [
            {
                id: 0,
                name: 'panino tonno',
                description: 'pane con lievitazione lenta',
                quantity: 1, //opzionale
                addedIngredients: [
                    {
                        id: 0,
                        name: 'curcuma',
                        quantity: 2,
                        price: 1.00,
                        totalPrice: 2.00
                    },
                    {
                        id: 0,
                        name: 'curcuma',
                        quantity: 2,
                        price: 1.00,
                        totalPrice: 2.00
                    }
                ],
                price: 9.00,
                finalPrice: 13.00, //(prezzo * quantità) + (ingredienti aggiuntivi * quantità)
            },
            {
                id: 1,
                name: 'cocacola',
                quantity: 1,
                addedIngredients: [],
                price: 2.00,
                finalPrice: 2.00, //(prezzo * quantità) + (ingredienti aggiuntivi * quantità)
            }
        ]
    }
}


export var products = [
    {
        id: 1,
        code: 'qwerty',
        name: 'Panino pomodoro',
        description: 'pomodori, provola, patate, maionaise, insalata, cipolla, capperi, origano, olio, sale, pepe,', 
        category: 'Panini',
        image: 'https://chioscomaradona.com/23-medium_default/caprese-panino-con-mozzarella-pomodoro-origano-sale-olio.jpg',
        ingredients: [1, 3, 4, 5],
        allergens: [1, 2],
        active: true,
        categories: [23, 24, 1, 3],
        amount_gross: 0.00,
        amount_net: 0.00,
        tax: 0.00,
    },
    {
        id: 4,
        code: 'qwerty',
        name: "Panino pomodoro",
        description: 'pomodori, provola, patate, maionaise, insalata, cipolla, capperi, origano, olio, sale, pepe,', 
        category: "Panini",
        image: "https://www.napolike.it/wp-content/uploads/2017/02/migliori-pub-vomero.jpg",
        ingredients: [1, 3, 4, 5],
        allergens: [1, 2],
        active: true,
        categories: [23, 24, 1, 3],
        amount_gross: 6.99,
        amount_net: 5.99,
        tax: 1.00
    },
    
    {
        id: 2,
        code: 'qwerty',
        name: "Pizza Margherita",
        category: "Pizze",
        image: "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format",
        ingredients: [1, 2, 3],
        allergens: [1, 2],
        active: true,
        categories: [23,],
        amount_gross: 8.99,
        amount_net: 7.99,
        tax: 1.00
    },
    
    {
        id: 3,
        code: 'qwerty',
        name: "Insalata Caprese",
        category: "Insalate",
        image: "url",
        ingredients: [6, 7, 8],
        allergens: [1, 2],
        active: true,
        categories: [24],
        amount_gross: 7.49,
        amount_net: 6.99,
        tax: 0.50
    }
]

export var ingredients = [
    {
        id: 1,
        code: 'qwerty',
        name: 'curcuma',
        image: 'url',
        category_ingredient: 1,
        amount_gross: 0.00,
        amount_net: 0.00,
        tax: 0.00,
    },
    
    {
        id: 2,
        code: 'qwerty',
        name: 'mozzarella',
        img: 'url',
        category_ingredient: 1,
        amount_gross: 0.00,
        amount_net: 0.00,
        tax: 0.00,
    },
    
    {
        id: 3,
        code: 'qwerty',
        name: 'pomodoro',
        image: 'url',
        category_ingredient: 1,
        amount_gross: 0.00,
        amount_net: 0.00,
        tax: 0.00,
    },
    
    {
        id: 4,
        code: 'qwerty',
        name: 'farina',
        image: 'url',
        category_ingredient: 1,
        amount_gross: 0.00,
        amount_net: 0.00,
        tax: 0.00,
    }
]



export var allergens = [
    {
        id: 1,
        name: 'Glutine',
        icon: ''
    },
    {
        id: 2,
        name: 'Crostacei',
        icon: ''
    },
    {
        id: 3,
        name: 'Noci',
        icon: ''
    },
]

export const categories = [
    {
        id: 1,
        code: 'qwerty',
        name: 'Panini',
        description: 'panini alla piastra',
        image: 'https://c8.alamy.com/compit/mcc7ey/la-cottura-del-pane-panini-e-croissant-come-sfondo-mcc7ey.jpg',
        id_parent_category: null
    },  
    {
        id: 33,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s7e5a.scene7.com/is/image/conad/come-cucinare-la-carne-di-cervo?wid=900&hei=500&fit=crop,1&qlt=92',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },
    {
        id: 1,
        code: 'qwerty',
        name: 'Panini',
        description: 'panini alla piastra',
        image: 'https://c8.alamy.com/compit/mcc7ey/la-cottura-del-pane-panini-e-croissant-come-sfondo-mcc7ey.jpg',
        id_parent_category: null
    },  
    {
        id: 2,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s7e5a.scene7.com/is/image/conad/come-cucinare-la-carne-di-cervo?wid=900&hei=500&fit=crop,1&qlt=92',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },
    {
        id: 1,
        code: 'qwerty',
        name: 'Panini',
        description: 'panini alla piastra',
        image: 'https://c8.alamy.com/compit/mcc7ey/la-cottura-del-pane-panini-e-croissant-come-sfondo-mcc7ey.jpg',
        id_parent_category: null
    },  
    {
        id: 2,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s1.1zoom.me/big0/618/Tomatoes_Hamburger_Cucumbers_Buns_Black_background_581872_1280x853.jpg',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },
    {
        id: 8,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s1.1zoom.me/big0/618/Tomatoes_Hamburger_Cucumbers_Buns_Black_background_581872_1280x853.jpg',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },
    {
        id: 2,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s1.1zoom.me/big0/618/Tomatoes_Hamburger_Cucumbers_Buns_Black_background_581872_1280x853.jpg',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },
    {
        id: 8,
        code: 'qwerty',
        name: 'Panini di carne',
        description: 'panini con carne',
        image: 'https://s1.1zoom.me/big0/618/Tomatoes_Hamburger_Cucumbers_Buns_Black_background_581872_1280x853.jpg',
        id_parent_category: 1
    },
    {
        id: 3,
        code: 'qwerty',
        name: 'Pizze',
        description: 'Le nostre pizze',
        image: 'https://images6.alphacoders.com/609/609345.jpg',
        id_parent_category: null
    },      
]

export var categories_ingredients = [
    {
        id: 1,
        name: 'Tipo pane',
        description: '',
        image: 'url',
    },  
    {
        id: 2,
        name: 'Spezie',
        description: '',
        image: 'url',
    },
    {
        id: 3,
        name: 'Proteine',
        description: 'Scegli le proteine',
        image: 'url',
    },  
]

export const calendar = {
    "anni": [
        "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032",
        "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042",
        "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052",
        "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060", "2061", "2062",
        "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072",
        "2073", "2074", "2075", "2076", "2077", "2078", "2079", "2080", "2081", "2082",
        "2083", "2084", "2085", "2086", "2087", "2088", "2089", "2090"
    ],
    "anni_bisestili": [
        2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060,
        2064, 2068, 2072, 2076, 2080, 2084, 2088,
    ],
    "mesi": {
        "1": 31, "2": 28, "3": 31, "4": 30,
        "5": 31, "6": 30, "7": 31, "8": 31,
        "9": 30, "10": 31, "11": 30, "12": 31
    }
}





