//1- READ ONE INCIDENT FOR EACH TIME
var gr = new GlideRecord('incident');
gr.get('9c573169c611228700193229fff72400');
gs.info(gr.number+ '-' +gr.assignment_group.getDisplayValue()+ '-' +gr.state.getDisplayValue());

//OTHER OPTION
var gr = new GlideRecord('incident');
gr.get('number','INC0000001');
gs.info(gr.number+ '-' +gr.assignment_group.getDisplayValue()+ '-' +gr.state.getDisplayValue());

//OTHER OPTION
var gr = new GlideRecord('incident');
var number = 'INC0000001'
gr.get('number', 'INC0000001');
if (number == 'INC0000001') {
    gs.info('hi'+ '- ' + gr.number + '-' + gr.state.getDisplayValue());
} else {
    gr.info('Record not found');
}

//OTHER OPTION
var gr = new GlideRecord('incident');
if (gr.get('number','INC0000002')){
gs.info(gr.number+ '-' +gr.short_description+ '-'+gr.state.getDisplayValue());
}else{
	gs.info('Record not found');
}


//2 - READ ALL IN PROGRESS INCIDENTS
var gr = new GlideRecord('incident');
gr.addEncodedQuery('state=2^priority=1');
//gr.addQuery('state', 2);
//gr.addQuery('priority', 1);
gr.query();
gs.info('Record count' + gr.getRowCount());
while (gr.next()) {
gs.info('This is all' + gr.number + '-' + gr.state.getDisplayValue());

}




