// CREATE incident
var gr = new GlideRecord('incident');
gr.initialize;
 // use initialize for 
gr.short_description = "Test";
gr.caller_id = "77ad8176731313005754660c4cf6a7de";
gr.insert();
gs.info('Incident Number'+gr.number+'-'+gr.state.getDisplayValue());



