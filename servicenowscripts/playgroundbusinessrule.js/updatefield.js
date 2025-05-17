//Assignment Group to auto-populate based on the selected Category,
//Business Rule: Before Insert/Update

(function executeRule(current, previous /*null when async*/) {

    if (current.category == 'hardware') {
        current.assignment_group.setValue('Service Desk');
    } else {
        gs.addErrorMessage('Arent the Hardware category');
        current.assignment_group='';
    }
})(current, previous);