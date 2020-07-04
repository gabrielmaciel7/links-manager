const mongoose = require("mongoose");

const Link = mongoose.model("Link");

module.exports = {
  async list(req, res) {
    const links = await Link.find();

    return res.jsonOK(links);
  },

  async listOne(req, res) {
    const { id } = req.params;

    let link = null;

    try {
      link = await Link.findOne({ _id: id });
    } catch (error) {
      return res.jsonNotFound();
    }

    return res.jsonOK(link);
  },

  async create(req, res) {
    const { label, url, is_social } = req.body;

    const image_url = "http://google.com/image.jpg";

    const link = await Link.create({ label, url, image_url, is_social });

    return res.jsonOK(link);
  },

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const fields = ["label", "url", "is_social"];

    try {
      link = await Link.findOne({ _id: id });
    } catch (error) {
      return res.jsonNotFound();
    }

    fields.map((fieldName) => {
      const newValue = body[fieldName];

      if (newValue !== undefined) link[fieldName] = newValue;
    });

    await link.save();

    return res.jsonOK(link);
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      link = await Link.findOne({ _id: id });
    } catch (error) {
      return res.jsonNotFound();
    }

    await link.delete();
    return res.jsonOK();
  },
};
