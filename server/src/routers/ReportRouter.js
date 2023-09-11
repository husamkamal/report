const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');
const login = require('../controllers/auth');
const { getAllHypotheses, hypoth } = require('../controllers/Hypothesis');

// Create a new report
router.post('/reports', ReportController.createReport);
router.post('/login', login);
router.post('/hypoth', hypoth);
router.get('/hypoth', getAllHypotheses);

// Get reports by cause of accident
router.get('/reports/cause/:cause', ReportController.getReportsByCause);
router.get('/reports/year/:year', ReportController.getAllReports);
router.get('/reports/month/:year/:month', ReportController.getAllReportsMonth);
router.get('/reports/day/:year/:month/:day', ReportController.getAllReportsDay);

module.exports = router;
