var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Geositi_1 = new ol.format.GeoJSON();
var features_Geositi_1 = format_Geositi_1.readFeatures(json_Geositi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geositi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geositi_1.addFeatures(features_Geositi_1);
var lyr_Geositi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geositi_1, 
                style: style_Geositi_1,
                popuplayertitle: "Geositi",
                interactive: true,
                    title: '<img src="styles/legend/Geositi_1.png" /> Geositi'
                });
var format_Soggiorni_2 = new ol.format.GeoJSON();
var features_Soggiorni_2 = format_Soggiorni_2.readFeatures(json_Soggiorni_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soggiorni_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soggiorni_2.addFeatures(features_Soggiorni_2);
var lyr_Soggiorni_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Soggiorni_2, 
                style: style_Soggiorni_2,
                popuplayertitle: "Soggiorni",
                interactive: true,
                    title: '<img src="styles/legend/Soggiorni_2.png" /> Soggiorni'
                });
var format_Murgia_3 = new ol.format.GeoJSON();
var features_Murgia_3 = format_Murgia_3.readFeatures(json_Murgia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Murgia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Murgia_3.addFeatures(features_Murgia_3);
var lyr_Murgia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Murgia_3, 
                style: style_Murgia_3,
                popuplayertitle: "Murgia",
                interactive: true,
                    title: '<img src="styles/legend/Murgia_3.png" /> Murgia'
                });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Geositi_1.setVisible(true);lyr_Soggiorni_2.setVisible(true);lyr_Murgia_3.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Geositi_1,lyr_Soggiorni_2,lyr_Murgia_3];
lyr_Geositi_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'descrizoin': 'descrizoin', 'topic': 'topic', 'visitabile': 'visitabile', });
lyr_Soggiorni_2.set('fieldAliases', {'id': 'id', 'Località': 'Località', 'indirizzo': 'indirizzo', 'checkin': 'checkin', 'checkout': 'checkout', 'Nome': 'Nome', });
lyr_Murgia_3.set('fieldAliases', {'id': 'id', 'Sito': 'Sito', 'note': 'note', });
lyr_Geositi_1.set('fieldImages', {'id': '', 'nome': '', 'descrizoin': '', 'topic': '', 'visitabile': '', });
lyr_Soggiorni_2.set('fieldImages', {'id': 'TextEdit', 'Località': 'TextEdit', 'indirizzo': 'TextEdit', 'checkin': 'DateTime', 'checkout': 'DateTime', 'Nome': 'TextEdit', });
lyr_Murgia_3.set('fieldImages', {'id': 'TextEdit', 'Sito': 'TextEdit', 'note': 'TextEdit', });
lyr_Geositi_1.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'descrizoin': 'no label', 'topic': 'no label', 'visitabile': 'no label', });
lyr_Soggiorni_2.set('fieldLabels', {'id': 'no label', 'Località': 'no label', 'indirizzo': 'no label', 'checkin': 'no label', 'checkout': 'no label', 'Nome': 'no label', });
lyr_Murgia_3.set('fieldLabels', {'id': 'no label', 'Sito': 'inline label - always visible', 'note': 'no label', });
lyr_Murgia_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});