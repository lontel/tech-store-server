const { Schema, model } = require("mongoose")

const bannerSchema = new Schema(
    {
        pictures: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
)

const Banner = model('Banner', bannerSchema)

module.exports = Banner