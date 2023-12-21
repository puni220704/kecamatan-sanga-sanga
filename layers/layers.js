var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sungai1_1 = new ol.format.GeoJSON();
var features_sungai1_1 = format_sungai1_1.readFeatures(json_sungai1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai1_1.addFeatures(features_sungai1_1);
var lyr_sungai1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai1_1, 
                style: style_sungai1_1,
                interactive: true,
                title: '<img src="styles/legend/sungai1_1.png" /> sungai1'
            });
var format_agri_ladang_2 = new ol.format.GeoJSON();
var features_agri_ladang_2 = format_agri_ladang_2.readFeatures(json_agri_ladang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agri_ladang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agri_ladang_2.addFeatures(features_agri_ladang_2);
var lyr_agri_ladang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agri_ladang_2, 
                style: style_agri_ladang_2,
                interactive: true,
                title: '<img src="styles/legend/agri_ladang_2.png" /> agri_ladang'
            });
var format_agri_kebun_3 = new ol.format.GeoJSON();
var features_agri_kebun_3 = format_agri_kebun_3.readFeatures(json_agri_kebun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agri_kebun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agri_kebun_3.addFeatures(features_agri_kebun_3);
var lyr_agri_kebun_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agri_kebun_3, 
                style: style_agri_kebun_3,
                interactive: true,
                title: '<img src="styles/legend/agri_kebun_3.png" /> agri_kebun'
            });
var format_Kecamatan_sangasanga_4 = new ol.format.GeoJSON();
var features_Kecamatan_sangasanga_4 = format_Kecamatan_sangasanga_4.readFeatures(json_Kecamatan_sangasanga_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_sangasanga_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_sangasanga_4.addFeatures(features_Kecamatan_sangasanga_4);
var lyr_Kecamatan_sangasanga_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_sangasanga_4, 
                style: style_Kecamatan_sangasanga_4,
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_sangasanga_4.png" /> Kecamatan_sanga-sanga'
            });
var format_pemukiman_5 = new ol.format.GeoJSON();
var features_pemukiman_5 = format_pemukiman_5.readFeatures(json_pemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukiman_5.addFeatures(features_pemukiman_5);
var lyr_pemukiman_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukiman_5, 
                style: style_pemukiman_5,
                interactive: true,
                title: '<img src="styles/legend/pemukiman_5.png" /> pemukiman'
            });
var format_sarana_ibadah_6 = new ol.format.GeoJSON();
var features_sarana_ibadah_6 = format_sarana_ibadah_6.readFeatures(json_sarana_ibadah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sarana_ibadah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sarana_ibadah_6.addFeatures(features_sarana_ibadah_6);
var lyr_sarana_ibadah_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sarana_ibadah_6, 
                style: style_sarana_ibadah_6,
                interactive: true,
                title: '<img src="styles/legend/sarana_ibadah_6.png" /> sarana_ibadah'
            });
var format_puskesmas_7 = new ol.format.GeoJSON();
var features_puskesmas_7 = format_puskesmas_7.readFeatures(json_puskesmas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmas_7.addFeatures(features_puskesmas_7);
var lyr_puskesmas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puskesmas_7, 
                style: style_puskesmas_7,
                interactive: true,
                title: '<img src="styles/legend/puskesmas_7.png" /> puskesmas'
            });
var format_pendidikan_8 = new ol.format.GeoJSON();
var features_pendidikan_8 = format_pendidikan_8.readFeatures(json_pendidikan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_8.addFeatures(features_pendidikan_8);
var lyr_pendidikan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_8, 
                style: style_pendidikan_8,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_8.png" /> pendidikan'
            });
var format_pemerintahan_9 = new ol.format.GeoJSON();
var features_pemerintahan_9 = format_pemerintahan_9.readFeatures(json_pemerintahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_9.addFeatures(features_pemerintahan_9);
var lyr_pemerintahan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemerintahan_9, 
                style: style_pemerintahan_9,
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_9.png" /> pemerintahan'
            });
var format_makam_10 = new ol.format.GeoJSON();
var features_makam_10 = format_makam_10.readFeatures(json_makam_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makam_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makam_10.addFeatures(features_makam_10);
var lyr_makam_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_makam_10, 
                style: style_makam_10,
                interactive: true,
                title: '<img src="styles/legend/makam_10.png" /> makam'
            });
var format_layanankesehatan_11 = new ol.format.GeoJSON();
var features_layanankesehatan_11 = format_layanankesehatan_11.readFeatures(json_layanankesehatan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layanankesehatan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layanankesehatan_11.addFeatures(features_layanankesehatan_11);
var lyr_layanankesehatan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layanankesehatan_11, 
                style: style_layanankesehatan_11,
                interactive: true,
                title: '<img src="styles/legend/layanankesehatan_11.png" /> layanankesehatan'
            });
var format_sungai_12 = new ol.format.GeoJSON();
var features_sungai_12 = format_sungai_12.readFeatures(json_sungai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_12.addFeatures(features_sungai_12);
var lyr_sungai_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_12, 
                style: style_sungai_12,
                interactive: true,
                title: '<img src="styles/legend/sungai_12.png" /> sungai'
            });
var format_jalan_13 = new ol.format.GeoJSON();
var features_jalan_13 = format_jalan_13.readFeatures(json_jalan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_13.addFeatures(features_jalan_13);
var lyr_jalan_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_13, 
                style: style_jalan_13,
                interactive: true,
                title: '<img src="styles/legend/jalan_13.png" /> jalan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_sungai1_1.setVisible(true);lyr_agri_ladang_2.setVisible(true);lyr_agri_kebun_3.setVisible(true);lyr_Kecamatan_sangasanga_4.setVisible(true);lyr_pemukiman_5.setVisible(true);lyr_sarana_ibadah_6.setVisible(true);lyr_puskesmas_7.setVisible(true);lyr_pendidikan_8.setVisible(true);lyr_pemerintahan_9.setVisible(true);lyr_makam_10.setVisible(true);lyr_layanankesehatan_11.setVisible(true);lyr_sungai_12.setVisible(true);lyr_jalan_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sungai1_1,lyr_agri_ladang_2,lyr_agri_kebun_3,lyr_Kecamatan_sangasanga_4,lyr_pemukiman_5,lyr_sarana_ibadah_6,lyr_puskesmas_7,lyr_pendidikan_8,lyr_pemerintahan_9,lyr_makam_10,lyr_layanankesehatan_11,lyr_sungai_12,lyr_jalan_13];
lyr_sungai1_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_agri_ladang_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_agri_kebun_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kecamatan_sangasanga_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_pemukiman_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sarana_ibadah_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_puskesmas_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_pendidikan_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_pemerintahan_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_makam_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPMKM': 'TPMKM', });
lyr_layanankesehatan_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_sungai_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_13.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungai1_1.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_agri_ladang_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_agri_kebun_3.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Kecamatan_sangasanga_4.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_pemukiman_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_sarana_ibadah_6.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_puskesmas_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_pendidikan_8.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_pemerintahan_9.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_makam_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPMKM': '', });
lyr_layanankesehatan_11.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_sungai_12.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_jalan_13.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_sungai1_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_agri_ladang_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_agri_kebun_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kecamatan_sangasanga_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_pemukiman_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sarana_ibadah_6.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_puskesmas_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_pendidikan_8.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_pemerintahan_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_makam_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPMKM': 'no label', });
lyr_layanankesehatan_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_sungai_12.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_13.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});