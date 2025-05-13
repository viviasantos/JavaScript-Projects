//1- DELETE ONE INCIDENT
var gr = new GlideRecord('incident');

gr.get('9c573169c611228700193229fff72400');
gr.deleteRecord();


//2- DELETED ALL INCIDENTS STATES 2

var gr = new GlideRecord('incident');
var count = 0;
gr.addQuery('state', 2);
gr.query();

while (gr.next()) {
    gr.deleteRecord();
    count++;

}
gs.info('incidents deleted' + '-' + count);

//DELETED ALL INCIDENTS
var gr = new GlideRecord('incident');
gr.query();

while (gr.next()) {
    gr.deleteRecord();
}
gs.info('incidents deleted');
