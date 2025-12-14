const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

// GET ALL / GET ONE (ID:n perusteella)
router.get('/:id?', 
    function (request, response) {
        if (request.params.id) {
            opiskelija.getOne(request.params.id, function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            })
        } else {
            opiskelija.getAll(function (err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    console.log(dbResult);
                    response.json(dbResult);
                }
            })
        }
    });

// GET ARVIOINNIT (Opiskelija ID:n perusteella)
router.get('/:id/arviointi', 
  function (request, response) {
    opiskelija.getGradesByStudentId(request.params.id, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        if (dbResult.length > 0) {
          response.json(dbResult);
        } else {
          // Palautetaan 404 jos arvosanoja ei löydy, mutta opiskelija on olemassa
          response.status(404).json({ message: "No grades found for this student ID." });
        }
      }
    });
  }
);


// POST (CREATE)
router.post('/', 
function(request, response) {
  opiskelija.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


// DELETE
router.delete('/:id', 
function(request, response) {
  opiskelija.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


// PUT (UPDATE)
router.put('/:id', 
function(request, response) {
  opiskelija.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;