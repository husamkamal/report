const { Sequelize } = require('sequelize');
const Report = require('../models/Report');

// Create a new report
async function createReport(req, res) {
    console.log(req.body)
  try {
    const report = await Report.create(req.body);
    return res.status(201).json(report);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Get reports with a specific cause of accident
async function getReportsByCause(req, res) {
  const { cause } = req.params;
  console.log(cause)
  try {
    const reports = await Report.findAll();
    // console.log(reports[0].dataValues, 434)
    console.log(reports)
    const filter = reports.filter((e)=>{
      return e.supCauseOfAccident.includes(cause)
    })
    return res.status(200).json(filter);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getAllReports(req, res) {
  const {year} = req.params;
  try {
    const reports = await Report.findAll({
      where: {
        gregorianDate: {
          [Sequelize.Op.between]: [`${year}-01-01`, `${year}-12-31`],
        },
      },
  });
    
    return res.status(200).json(reports);
  } catch (error) {
    console.error(error,1);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getAllReportsMonth(req, res) {
  const {year, month} = req.params;
  try {
    const reports = await Report.findAll({
      where: {
        gregorianDate: {
          [Sequelize.Op.between]: [`${year}-${month}-01`, `${year}-${month}-31`],
        },
      },
  });
    
    return res.status(200).json(reports);
  } catch (error) {
    console.error(error,1);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getAllReportsDay(req, res) {
  const {year,month,day} = req.params;
  try {
    const reports = await Report.findAll({
      where: {
        [Sequelize.Op.and]: [
          Sequelize.where(Sequelize.literal('DATE_PART(\'day\', "gregorianDate")'), day),
          // Add any other conditions you need here
        ],      },
  });
    
    return res.status(200).json(reports);
  } catch (error) {
    console.error(error,1);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createReport,
  getReportsByCause,
  getAllReports,
  getAllReportsMonth,
  getAllReportsDay,
};
