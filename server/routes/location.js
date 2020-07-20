const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Location } = require("../models/Location");

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },

    fileFilter: (req, file, cb)  => {
        const ext = path.extname(file.originalname);
        
        if( ext != '.jpg' || ext != '.png') {
            return cb(res.status(400).end('pictures must be in .jpg or .png formats.'), false);
        }

        cb(null, true);
    }
});

var upload = multer({ storage: storage }).single('file');
//=================================
//             Locations
//=================================

router.post("/uploadImage", auth, (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err });
        }

        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename });
    })
});

router.post("/uploadLocation", auth, (req, res) => {
    const location = new Location(req.body);
    location.save((err) => {
        if(err) {
            return res.status(400).json({ success: false, err });
        } else {
            return res.status(200).json({ success: true });
        }
    });
})

router.post('/getLocations', (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = req.body.skip;
    

    Location.find()
        .populate("writer")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, locations) => {
            if(err) {
                return res.status(400).json({ success: false, err });
            }

            res.status(200).json({ success: true, locations, locationsShown: locations.length });
        });
});
module.exports = router;