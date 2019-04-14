module.exports = function(app, db) {

    app.post('/shops/:id', (req, res) => {
        res.send(JSON.stringify(shops_json))
    });

    app.post('/shops', (req, res) => {
        const newShop = req.body
        shops_json.shops.push(newShop)
        res.send('Hello')
    });

    app.delete('/shops/:id', (req, res) => {
        res.send('Deleting a shop')
    });

    app.put('/shops/:id', (req, res) => {

    });

};

const shops_json = {
    shops: [
        {
            name: 'E5  Bakehouse',
            address: 'Arch 395, Mentmore Terrace, London E8 3PH',
            latitude: '51.5411816',
            longitude: '-0.0598188',
            fruit: false,
            veg: false,
            dry_goods: true,
            beauty_products: false,
            wine: false
        },
        {
            name: 'Bulk Market',
            address: '6 Bohemia Place, E8 1DU',
            latitude: '51.5472315',
            longitude: '-0.0560251',
            fruit: true,
            veg: true,
            dry_goods: true,
            beauty_products: true,
            wine: false
        },
        {
            name: 'As Nature Intended',
            address: 'The Exchange Building, 132 Commercial Street Spitalfields, London, E1 6NG',
            latitude: '51.5210109',
            longitude: '-0.0769974',
            fruit: true,
            veg: true,
            dry_goods: true,
            beauty_products: false,
            wine: false
        },
        {
            name: 'As Nature Intended',
            address: 'Westfield Stratford City, Great Eastern Market, Lower Ground Floor, Stratford, London ,E20 1GP',
            latitude: '51.5440503',
            longitude: '-0.010842',
            fruit: true,
            veg: true,
            dry_goods: true,
            beauty_products: false,
            wine: false
        },
        // {
        //     name: 'Get Loose Foods',
        //     address: '1a Goldsmith\'s Row, London, E2 8QA',
        //     latitude: '51.5317292',
        //     longitude: '-0.0687041',
        //     fruit: true,
        //     veg: true,
        //     dry_goods: true,
        //     beauty_products: false,
        //     wine: false
        // },
    ]
}



