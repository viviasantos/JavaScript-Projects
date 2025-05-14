//1 - UPDATE INCIDENT ONE BY ONE
var gr = new GlideRecord('incident');

if (gr.get('9c573169c611228700193229fff72400')){
gr.setValue('short_description','New short description');
gr.update();
gs.info('hellow ' + gr.number + '-' + gr.short_description);
}else{
	gs.info('Incident do not update');
}

// OTHER OPTION
var gr = new GlideRecord('incident');
gr.get('9c573169c611228700193229fff72400');
gr.short_description = 'New short description';
gr.update();

// OTHER OPTION
var gr = new GlideRecord('incident');
if (gr.get('9c573169c611228700193229fff72400')) {
    gr.setValue('short_description', 'New short description');
    gr.update();
    gs.info('Updated: ' + gr.number);
} else {
    gs.info('Incident not found.');
}

//2- UPDATE INCIDENTS STATE 2
var gr = new GlideRecord('incident');
var count = 0;

gr.addQuery('state', 2);
gr.query();

while (gr.next()) {
    gr.setValue('short_description', 'New short description');
    gr.update();
    count++;
}
gs.info('Total updated records: ' + count);


//OTHER WAY
var gr = new GlideRecord('incident');
gr.addEncodedQuery('state=3^priority=1');
gr.query();

gr.setValue('state', 1);
gr.updateMultiple();

gs.info('incidents updtated');


//UPDATE ALL INCIDENTS
var gr = new GlideRecord('incident');
gr.query(); // Sem filtros — seleciona todos os registros

gr.setValue('state', 1); // Novo valor que será aplicado a todos
var updatedCount = gr.updateMultiple(); // Aplica a mudança em todos os registros

gs.info('Total incidents updated: ' + updatedCount);

