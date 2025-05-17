//Prevent closing Incident if Work Notes are empty
//Business Rule: Before Update + condition on state change to “Closed”
(function executeRule(current, previous /*null when async*/) {

    if (current.state.changesTo(7) && gs.nil(current.work_notes)) {
        gs.addErrorMessage('Hi the incident cant be closed work notes is emptv' + current.numer + '-' + current.state.setDisplayValue());
        current.setAbortAction(true);
    }

})(current, previous);