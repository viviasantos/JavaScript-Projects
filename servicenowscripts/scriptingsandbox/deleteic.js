//Delete specific IC inside CMDB Table
//Business Rule: Assinc

var gr = new GlideRecord('cmdb_ci_computer');
gr.addQuery('name', '*ANNIE-IBM');
gr.query();
gs.info('Count' + gr.getRowCount());
while (gr.next()) {
    gs.info('this is all' + gr.assigned_to.getDisplayValue());
    gr.deleteRecord();
}