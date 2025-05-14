//Assignment Group to auto-populate based on the selected Category,
//Business Rule: Before Insert/Update

(function executeRule(current, previous /*null when async*/) {


    var category = current.category;
    var assignmentGroup = current.assignment_group;

    if (current.category == 'hardware') {
        current.assignment_group.setValue('Service Desk');
    } else {
        gs.addErrorMessage('Arent the Hardware category');
    }
})(current, previous);