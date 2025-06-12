var wms_layers = [];

var format_AdministrasiKabSleman_0 = new ol.format.GeoJSON();
var features_AdministrasiKabSleman_0 = format_AdministrasiKabSleman_0.readFeatures(json_AdministrasiKabSleman_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKabSleman_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKabSleman_0.addFeatures(features_AdministrasiKabSleman_0);
var lyr_AdministrasiKabSleman_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKabSleman_0, 
                style: style_AdministrasiKabSleman_0,
                popuplayertitle: 'Administrasi Kab.Sleman',
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKabSleman_0.png" /> Administrasi Kab.Sleman'
            });
var format_KepadatanPenduduk_1 = new ol.format.GeoJSON();
var features_KepadatanPenduduk_1 = format_KepadatanPenduduk_1.readFeatures(json_KepadatanPenduduk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPenduduk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPenduduk_1.addFeatures(features_KepadatanPenduduk_1);
var lyr_KepadatanPenduduk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPenduduk_1, 
                style: style_KepadatanPenduduk_1,
                popuplayertitle: 'Kepadatan Penduduk',
                interactive: true,
    title: 'Kepadatan Penduduk<br />\
    <img src="styles/legend/KepadatanPenduduk_1_0.png" /> Berbah<br />\
    <img src="styles/legend/KepadatanPenduduk_1_1.png" /> Cangkringan<br />\
    <img src="styles/legend/KepadatanPenduduk_1_2.png" /> Depok<br />\
    <img src="styles/legend/KepadatanPenduduk_1_3.png" /> Gamping<br />\
    <img src="styles/legend/KepadatanPenduduk_1_4.png" /> Godean<br />\
    <img src="styles/legend/KepadatanPenduduk_1_5.png" /> Kalasan<br />\
    <img src="styles/legend/KepadatanPenduduk_1_6.png" /> Minggir<br />\
    <img src="styles/legend/KepadatanPenduduk_1_7.png" /> Mlati<br />\
    <img src="styles/legend/KepadatanPenduduk_1_8.png" /> Moyudan<br />\
    <img src="styles/legend/KepadatanPenduduk_1_9.png" /> Ngaglik<br />\
    <img src="styles/legend/KepadatanPenduduk_1_10.png" /> Ngemplak<br />\
    <img src="styles/legend/KepadatanPenduduk_1_11.png" /> Pakem<br />\
    <img src="styles/legend/KepadatanPenduduk_1_12.png" /> Prambanan<br />\
    <img src="styles/legend/KepadatanPenduduk_1_13.png" /> Seyegan<br />\
    <img src="styles/legend/KepadatanPenduduk_1_14.png" /> Sleman<br />\
    <img src="styles/legend/KepadatanPenduduk_1_15.png" /> Tempel<br />\
    <img src="styles/legend/KepadatanPenduduk_1_16.png" /> Turi<br />\
    <img src="styles/legend/KepadatanPenduduk_1_17.png" /> <br />' });
var format_SebaranRumahSakit_2 = new ol.format.GeoJSON();
var features_SebaranRumahSakit_2 = format_SebaranRumahSakit_2.readFeatures(json_SebaranRumahSakit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranRumahSakit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranRumahSakit_2.addFeatures(features_SebaranRumahSakit_2);
var lyr_SebaranRumahSakit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranRumahSakit_2, 
                style: style_SebaranRumahSakit_2,
                popuplayertitle: 'Sebaran Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/SebaranRumahSakit_2.png" /> Sebaran Rumah Sakit'
            });
var format_Buffer_3 = new ol.format.GeoJSON();
var features_Buffer_3 = format_Buffer_3.readFeatures(json_Buffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_3.addFeatures(features_Buffer_3);
var lyr_Buffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_3, 
                style: style_Buffer_3,
                popuplayertitle: 'Buffer',
                interactive: true,
                title: '<img src="styles/legend/Buffer_3.png" /> Buffer'
            });
var format_Difference_4 = new ol.format.GeoJSON();
var features_Difference_4 = format_Difference_4.readFeatures(json_Difference_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Difference_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Difference_4.addFeatures(features_Difference_4);
var lyr_Difference_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Difference_4, 
                style: style_Difference_4,
                popuplayertitle: 'Difference',
                interactive: true,
                title: '<img src="styles/legend/Difference_4.png" /> Difference'
            });
var format_Intersection_5 = new ol.format.GeoJSON();
var features_Intersection_5 = format_Intersection_5.readFeatures(json_Intersection_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_5.addFeatures(features_Intersection_5);
var lyr_Intersection_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_5, 
                style: style_Intersection_5,
                popuplayertitle: 'Intersection',
                interactive: true,
                title: '<img src="styles/legend/Intersection_5.png" /> Intersection'
            });
var format_JaringanJalan_6 = new ol.format.GeoJSON();
var features_JaringanJalan_6 = format_JaringanJalan_6.readFeatures(json_JaringanJalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_6.addFeatures(features_JaringanJalan_6);
var lyr_JaringanJalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_6, 
                style: style_JaringanJalan_6,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_6.png" /> Jaringan Jalan'
            });

lyr_AdministrasiKabSleman_0.setVisible(true);lyr_KepadatanPenduduk_1.setVisible(true);lyr_SebaranRumahSakit_2.setVisible(true);lyr_Buffer_3.setVisible(true);lyr_Difference_4.setVisible(true);lyr_Intersection_5.setVisible(true);lyr_JaringanJalan_6.setVisible(true);
var layersList = [lyr_AdministrasiKabSleman_0,lyr_KepadatanPenduduk_1,lyr_SebaranRumahSakit_2,lyr_Buffer_3,lyr_Difference_4,lyr_Intersection_5,lyr_JaringanJalan_6];
lyr_AdministrasiKabSleman_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid_1': 'fid_1', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_KepadatanPenduduk_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'kalurahan': 'kalurahan', 'kapanewon': 'kapanewon', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'luas': 'luas', 'sumber': 'sumber', 'luas_ha': 'luas_ha', 'laki_laki': 'laki_laki', 'perempuan': 'perempuan', 'jumlah': 'jumlah', 'luas_km': 'luas_km', 'kepadatan': 'kepadatan', });
lyr_SebaranRumahSakit_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'no': 'no', 'nama_rs': 'nama_rs', 'alamat': 'alamat', 'kelas': 'kelas', 'karaterist': 'karaterist', 'pemilik': 'pemilik', 'jumlah_bed': 'jumlah_bed', 'bor': 'bor', 'akreditasi': 'akreditasi', 'last_updat': 'last_updat', 'jenis': 'jenis', 'telpon': 'telpon', 'fcode': 'fcode', 'namobj': 'namobj', 'srs_id': 'srs_id', 'metadata': 'metadata', 'remark': 'remark', });
lyr_Buffer_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'no': 'no', 'nama_rs': 'nama_rs', 'alamat': 'alamat', 'kelas': 'kelas', 'karaterist': 'karaterist', 'pemilik': 'pemilik', 'jumlah_bed': 'jumlah_bed', 'bor': 'bor', 'akreditasi': 'akreditasi', 'last_updat': 'last_updat', 'jenis': 'jenis', 'telpon': 'telpon', 'fcode': 'fcode', 'namobj': 'namobj', 'srs_id': 'srs_id', 'metadata': 'metadata', 'remark': 'remark', });
lyr_Difference_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'kalurahan': 'kalurahan', 'kapanewon': 'kapanewon', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'luas': 'luas', 'sumber': 'sumber', 'luas_ha': 'luas_ha', 'laki_laki': 'laki_laki', 'perempuan': 'perempuan', 'jumlah': 'jumlah', 'luas_km': 'luas_km', 'kepadatan': 'kepadatan', });
lyr_Intersection_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'no': 'no', 'nama_rs': 'nama_rs', 'alamat': 'alamat', 'kelas': 'kelas', 'karaterist': 'karaterist', 'pemilik': 'pemilik', 'jumlah_bed': 'jumlah_bed', 'bor': 'bor', 'akreditasi': 'akreditasi', 'last_updat': 'last_updat', 'jenis': 'jenis', 'telpon': 'telpon', 'fcode': 'fcode', 'namobj': 'namobj', 'srs_id': 'srs_id', 'metadata': 'metadata', 'remark': 'remark', 'ogc_fid_2': 'ogc_fid_2', 'objectid_2': 'objectid_2', 'kalurahan': 'kalurahan', 'kapanewon': 'kapanewon', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'luas': 'luas', 'sumber': 'sumber', 'luas_ha': 'luas_ha', 'laki_laki': 'laki_laki', 'perempuan': 'perempuan', 'jumlah': 'jumlah', 'luas_km': 'luas_km', 'kepadatan': 'kepadatan', });
lyr_JaringanJalan_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'autrjl': 'autrjl', 'fgsrjl': 'fgsrjl', 'jarrjl': 'jarrjl', 'jparjl': 'jparjl', 'kllrjl': 'kllrjl', 'konrjl': 'konrjl', 'kpmstr': 'kpmstr', 'lkonof': 'lkonof', 'lksbsp': 'lksbsp', 'lksrta': 'lksrta', 'llhrrt': 'llhrrt', 'locrjl': 'locrjl', 'lbrbhj': 'lbrbhj', 'lbrjln': 'lbrjln', 'matrjl': 'matrjl', 'medrjl': 'medrjl', 'spcrjl': 'spcrjl', 'starjl': 'starjl', 'tolrjl': 'tolrjl', 'utkrjl': 'utkrjl', 'vlcprt': 'vlcprt', 'wlyrjl': 'wlyrjl', 'tgl_sk': 'tgl_sk', 'jlnlyg': 'jlnlyg', 'klsrjl': 'klsrjl', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'arhrjl': 'arhrjl', });
lyr_AdministrasiKabSleman_0.set('fieldImages', {'ogc_fid': '', 'fid_1': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'kdbbps': '', 'kdcbps': '', 'kdcpum': '', 'kdebps': '', 'kdepum': '', 'kdpbps': '', 'kdpkab': '', 'kdppum': '', 'luaswh': '', 'tipadm': '', 'wadmkc': '', 'wadmkd': '', 'wadmkk': '', 'wadmpr': '', 'wiadkc': '', 'wiadkk': '', 'wiadpr': '', 'wiadkd': '', 'shape_leng': '', 'shape_area': '', });
lyr_KepadatanPenduduk_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'objectid': 'TextEdit', 'kalurahan': 'TextEdit', 'kapanewon': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'luas_ha': 'TextEdit', 'laki_laki': 'TextEdit', 'perempuan': 'TextEdit', 'jumlah': 'TextEdit', 'luas_km': 'TextEdit', 'kepadatan': 'TextEdit', });
lyr_SebaranRumahSakit_2.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'no': '', 'nama_rs': '', 'alamat': '', 'kelas': '', 'karaterist': '', 'pemilik': '', 'jumlah_bed': '', 'bor': '', 'akreditasi': '', 'last_updat': '', 'jenis': '', 'telpon': '', 'fcode': '', 'namobj': '', 'srs_id': '', 'metadata': '', 'remark': '', });
lyr_Buffer_3.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'no': '', 'nama_rs': '', 'alamat': '', 'kelas': '', 'karaterist': '', 'pemilik': '', 'jumlah_bed': '', 'bor': '', 'akreditasi': '', 'last_updat': '', 'jenis': '', 'telpon': '', 'fcode': '', 'namobj': '', 'srs_id': '', 'metadata': '', 'remark': '', });
lyr_Difference_4.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'kalurahan': '', 'kapanewon': '', 'kabupaten': '', 'provinsi': '', 'luas': '', 'sumber': '', 'luas_ha': '', 'laki_laki': '', 'perempuan': '', 'jumlah': '', 'luas_km': '', 'kepadatan': '', });
lyr_Intersection_5.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'no': '', 'nama_rs': '', 'alamat': '', 'kelas': '', 'karaterist': '', 'pemilik': '', 'jumlah_bed': '', 'bor': '', 'akreditasi': '', 'last_updat': '', 'jenis': '', 'telpon': '', 'fcode': '', 'namobj': '', 'srs_id': '', 'metadata': '', 'remark': '', 'ogc_fid_2': '', 'objectid_2': '', 'kalurahan': '', 'kapanewon': '', 'kabupaten': '', 'provinsi': '', 'luas': '', 'sumber': '', 'luas_ha': '', 'laki_laki': '', 'perempuan': '', 'jumlah': '', 'luas_km': '', 'kepadatan': '', });
lyr_JaringanJalan_6.set('fieldImages', {'ogc_fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'autrjl': '', 'fgsrjl': '', 'jarrjl': '', 'jparjl': '', 'kllrjl': '', 'konrjl': '', 'kpmstr': '', 'lkonof': '', 'lksbsp': '', 'lksrta': '', 'llhrrt': '', 'locrjl': '', 'lbrbhj': '', 'lbrjln': '', 'matrjl': '', 'medrjl': '', 'spcrjl': '', 'starjl': '', 'tolrjl': '', 'utkrjl': '', 'vlcprt': '', 'wlyrjl': '', 'tgl_sk': '', 'jlnlyg': '', 'klsrjl': '', 'shape_leng': '', 'shape_le_1': '', 'arhrjl': '', });
lyr_AdministrasiKabSleman_0.set('fieldLabels', {'ogc_fid': 'no label', 'fid_1': 'no label', 'objectid': 'no label', 'namobj': 'inline label - always visible', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'kdbbps': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdpbps': 'no label', 'kdpkab': 'no label', 'kdppum': 'no label', 'luaswh': 'no label', 'tipadm': 'no label', 'wadmkc': 'no label', 'wadmkd': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'wiadkc': 'no label', 'wiadkk': 'no label', 'wiadpr': 'no label', 'wiadkd': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_KepadatanPenduduk_1.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'kalurahan': 'no label', 'kapanewon': 'inline label - always visible', 'kabupaten': 'no label', 'provinsi': 'no label', 'luas': 'no label', 'sumber': 'no label', 'luas_ha': 'no label', 'laki_laki': 'no label', 'perempuan': 'no label', 'jumlah': 'no label', 'luas_km': 'no label', 'kepadatan': 'no label', });
lyr_SebaranRumahSakit_2.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'no': 'no label', 'nama_rs': 'inline label - always visible', 'alamat': 'inline label - always visible', 'kelas': 'inline label - always visible', 'karaterist': 'no label', 'pemilik': 'inline label - always visible', 'jumlah_bed': 'no label', 'bor': 'no label', 'akreditasi': 'no label', 'last_updat': 'no label', 'jenis': 'no label', 'telpon': 'no label', 'fcode': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'metadata': 'no label', 'remark': 'no label', });
lyr_Buffer_3.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'no': 'no label', 'nama_rs': 'no label', 'alamat': 'no label', 'kelas': 'no label', 'karaterist': 'no label', 'pemilik': 'no label', 'jumlah_bed': 'no label', 'bor': 'no label', 'akreditasi': 'no label', 'last_updat': 'no label', 'jenis': 'no label', 'telpon': 'no label', 'fcode': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'metadata': 'no label', 'remark': 'no label', });
lyr_Difference_4.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'kalurahan': 'no label', 'kapanewon': 'no label', 'kabupaten': 'no label', 'provinsi': 'no label', 'luas': 'no label', 'sumber': 'no label', 'luas_ha': 'no label', 'laki_laki': 'no label', 'perempuan': 'no label', 'jumlah': 'no label', 'luas_km': 'no label', 'kepadatan': 'no label', });
lyr_Intersection_5.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'no': 'no label', 'nama_rs': 'inline label - always visible', 'alamat': 'inline label - always visible', 'kelas': 'no label', 'karaterist': 'no label', 'pemilik': 'no label', 'jumlah_bed': 'no label', 'bor': 'no label', 'akreditasi': 'no label', 'last_updat': 'no label', 'jenis': 'no label', 'telpon': 'no label', 'fcode': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'metadata': 'no label', 'remark': 'no label', 'ogc_fid_2': 'no label', 'objectid_2': 'no label', 'kalurahan': 'no label', 'kapanewon': 'no label', 'kabupaten': 'no label', 'provinsi': 'no label', 'luas': 'no label', 'sumber': 'no label', 'luas_ha': 'no label', 'laki_laki': 'no label', 'perempuan': 'no label', 'jumlah': 'no label', 'luas_km': 'no label', 'kepadatan': 'no label', });
lyr_JaringanJalan_6.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'inline label - always visible', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'autrjl': 'no label', 'fgsrjl': 'no label', 'jarrjl': 'no label', 'jparjl': 'no label', 'kllrjl': 'no label', 'konrjl': 'no label', 'kpmstr': 'no label', 'lkonof': 'no label', 'lksbsp': 'no label', 'lksrta': 'no label', 'llhrrt': 'no label', 'locrjl': 'no label', 'lbrbhj': 'no label', 'lbrjln': 'no label', 'matrjl': 'no label', 'medrjl': 'no label', 'spcrjl': 'no label', 'starjl': 'no label', 'tolrjl': 'no label', 'utkrjl': 'no label', 'vlcprt': 'no label', 'wlyrjl': 'no label', 'tgl_sk': 'no label', 'jlnlyg': 'no label', 'klsrjl': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'arhrjl': 'no label', });
lyr_JaringanJalan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});