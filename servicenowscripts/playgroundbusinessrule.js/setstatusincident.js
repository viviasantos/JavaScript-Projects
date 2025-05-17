//Auto-set “State” to “New” when a new Incident is created
//Business Rule: Before Insert

(function executeRule(current, previous /*null when async*/) {

    current.state = 1;

})(current, previous);