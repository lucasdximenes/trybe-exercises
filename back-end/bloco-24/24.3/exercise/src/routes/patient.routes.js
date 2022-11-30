const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller");

router.get("/plans", patientController.getAllPatientsAndPlans);
router.get("/surgeries", patientController.getAllPatientsAndSurgeries);
router.get(
  "/surgeries/:doctorName",
  patientController.findSurgeriesByDoctorName
);
router.get("/plans/:planId", patientController.getPatientsOnAGivenPlan);

router.post("/", patientController.createPatient);

module.exports = router;
