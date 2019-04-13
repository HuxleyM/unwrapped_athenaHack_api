module.exports = function(app, db) {

    app.get('/shops/:id', (req, res) => {
        res.send('A shop')
    });

    app.post('/shops', (req, res) => {
        // You'll create your note here.
        res.send('Hello')
    });

    app.delete('/shops/:id', (req, res) => {
        res.send('Deleting a shop')
    });

    app.put('/shops/:id', (req, res) => {
       res.send('Adding a shop')
    });
};

