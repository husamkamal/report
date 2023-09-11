const Hypothesis = require("../models/Hypothesis");

const hypoth = async (req, res) => {
    try {
      const { hypothesis, date, status } = req.body;
      const newHypothesis = await Hypothesis.create({ hypothesis, date, status });
      res.status(201).json(newHypothesis);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
   const getAllHypotheses= async (req,res)=> {
    try {
      const hypotheses = await Hypothesis.findAll();
      res.status(200).json(hypotheses);
    } catch (error) {
      throw error;
    }
  }
  module.exports = {hypoth, getAllHypotheses};