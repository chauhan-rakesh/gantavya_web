var coordinator = require('../models/coordinator');

// Display list of all coordinators.
exports.coordinator_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Coordinator detail: ');
};

// Display detail page for a specific coordinator.
exports.coordinator_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Coordinator detail: ' + req.params.id);
};

// Display coordinator create form on GET.
exports.coordinator_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Coordinator create GET');
};

// Handle coordinator create on POST.
exports.coordinator_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Coordinator create POST');
};

// Display Coordinator delete form on GET.
exports.coordinator_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Coordinator delete GET');
};

// Handle coordinator delete on POST.
exports.coordinator_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: coordinator delete POST');
};

// Display coordinator update form on GET.
exports.coordinator_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: coordinator update GET');
};

// Handle coordinator update on POST.
exports.coordinator_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: coordinator update POST');
};
