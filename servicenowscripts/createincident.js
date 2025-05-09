//1 - CREATE incident
var gr = new GlideRecord('incident');
gr.initialize;
gr.short_description = 'Incident test';
gr.state = 'New';
gr.insert();
gs.info('hello this is a new incident ' +gr.number+ '-' +gr.state.getDisplayValue());


