//Assignment Group to auto-populate based on the selected Category,
//Business Rule: Before Insert/Update

(function executeRule(current, previous /*null when async*/) {

    //I want the Assignment Group to auto-populate based on the selected Category,
    if (current.category == 'software') {
        current.assignment_group.setDisplayValue('477a05d153013010b846ddeeff7b1225');
    } else {
        gs.addErrorMessage('This is not a hardware category');
        current.assignment_group = '';
    }

})(current, previous);