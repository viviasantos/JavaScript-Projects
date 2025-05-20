//Create Incident
// Business Rule Before
var createInc = new GlideRecord('incident');
createInc.initialize();

createInc.state = 1;
createInc.assigned_to = 'N287ebd7da9fe198100f92cc8d1d2154e';
createInc.category = 'hardware';
createInc.short_description = 'Incident test';
createInc.insert();
gs.info('incident created' + ' - ' + createInc.number);