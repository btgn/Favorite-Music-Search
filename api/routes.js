const
express = require('express'),
      path = require('path'),
      router = express.Router(),
      superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { artist } = req.query

        superagent
            .get('http://api.spotify.com/v1/search?q=' + artist + '&type=artist')
            .query({ json: true })
            .end((err, response) => {
            if (err)
                res.send(err)
            else
                res.json(response.body)
//                            console.log(response.body.artists.items)
        })
    })

    router.get('/api/details', (req, res) => {
        const { id } = req.query
        
//        console.log('query artist' + id)
        superagent
            .get('http://api.spotify.com/v1/artists/' + id + '/albums?market=US&album_type=album')
            .query({ json: true })
            .end((err, response) => {
            if (err)
                res.send(err)
            else
                res.json(response.body)
//            console.log(response.body.items)
        })
    })


    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}