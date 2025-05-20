//UPDATE SPECIFIC IC
var updaterecord = new GlideRecord('cmdb_ci');
if (updaterecord.get('b4fd7c8437201000deeabfc8bcbe5dc1')) {
    updaterecord.setValue('assigned_to', 'be82abf03710200044e0bfc8bcbe5d1c');
    updaterecord.update();
    gs.info('Record updated' + '-' + updaterecord.asset_tag);
} else {
    gs.info('this is not a correct record');
}

//UPDATE RECORDS WITH MANUFACTORY LENOVO
var updaterecordLenovo = new GlideRecord('cmdb_ci');
updaterecordLenovo.addQuery('manufacturer', 'aa0a6df8c611227601cd2ed45989e0ac');
updaterecordLenovo.query();
gs.info('Count' + '-' + updaterecordLenovo.getRowCount());
while (updaterecordLenovo.next()) {
    updaterecordLenovo.setValue('manufacturer', '81fca4cbac1d55eb355b4b6db0e3c80f');
    updaterecordLenovo.update();
}

//UPDATE RECORDS WITH MANUFACTORY LENOVO (addEncodedQuery)
var updaterecordLenovoMult = new GlideRecord('cmdb_ci');
updaterecordLenovoMult.addEncodedQuery('manufacturer = aa0a6df8c611227601cd2ed45989e0ac^company=31bea3d53790200044e0bfc8bcbe5dec');
updaterecordLenovoMult.query();
gs.info('Count' + '-' + updaterecordLenovoMult.getRowCount());
while (updaterecordLenovo.next()) {
    updaterecordLenovoMult.setValue('manufacturer', '81fca4cbac1d55eb355b4b6db0e3c80f');
    updaterecordLenovoMult.update();
}
