const Store = require('../models/Store');

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public 

exports.getStores = async(req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(201).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Server error'});
    }
};
