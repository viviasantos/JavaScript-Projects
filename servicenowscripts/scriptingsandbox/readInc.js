//Read specific Incident
var readIncSpec = new GlideRecord('incident');
readIncSpec.get('c45016b293e926509a6b35918bba10ae');
gs.info('print:' + '-' + readIncSpec.number + '-' + readIncSpec.state.getDisplayValue() + '-' + readIncSpec.assignment_group.getDisplayValue());

//Read Incidents with state = In Progress
var readIncInProg = new GlideRecord('incident');
readIncInProg.addQuery('state', 2);
readIncInProg.addQuery('priority',2);
readIncInProg.query();
gs.info('Count:' + readIncInProg.getRowCount());
while (readIncInProg.next()) {
    gs.info('Print incidents in Progress' + '-' + readIncInProg.number + '-' + readIncInProg.state.getDisplayValue());
}

//Read Incidents with state = In Progress (addEncodedQuery)
var readIncInP = new GlideRecord('incident');
readIncInP.addEncodedQuery('state=2^priority= 2');
readIncInP.query();
gs.info('Count:' + readIncInP.getRowCount());
while (readIncInP.next()) {
    gs.info('Print incidents in Progress' + '-' + readIncInP.number + '-' + readIncInP.state.getDisplayValue());
}